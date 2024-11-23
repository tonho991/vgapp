package com.seu.pacote;

import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.credentials.ClearCredentialStateRequest;
import androidx.credentials.Credential;
import androidx.credentials.CredentialManager;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.GetCredentialResponse;

import com.google.android.libraries.identity.googleid.GetGoogleIdOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.GoogleAuthProvider;

import org.jetbrains.annotations.Contract;

import java.util.Objects;
import java.util.concurrent.CancellationException;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.Dispatchers;

public class GoogleSignInClient {

    /*
    * Made by VGAPP © 2024
    */

    public static final String TAG = "GoogleSigInClient";

    private final Context context;
    private final CredentialManager credentialManager;
    private final FirebaseAuth auth;
    private OnSignInListener listener;

    private String serverClientId;

    public GoogleSignInClient(Context ctx, String serverClientId) {
        this.context = ctx;
        this.credentialManager = CredentialManager.create(context);
        this.auth = FirebaseAuth.getInstance();
        this.serverClientId = serverClientId;
    }

    @Contract(pure = true)
    private void handleSignInResult(@NonNull GetCredentialResponse response) {
        Credential credential = response.getCredential();


        if (credential.getType().equals(GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL)) {
            try {
                GoogleIdTokenCredential tokenCredential = GoogleIdTokenCredential.createFrom(credential.getData());

                AuthCredential authCredential = GoogleAuthProvider.getCredential(tokenCredential.getIdToken(), null);

                auth.signInWithCredential(authCredential).addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        onSignIn(true, "signInWithCredential: success", Result.TYPE_SUCCESS, tokenCredential);
                    } else {
                        onSignIn(false, task.getException().getMessage(), Result.TYPE_ERROR_FAILURE);
                    }
                });

            } catch (CancellationException e) {
                print("CancellationException: " + e.getMessage());
                onSignIn(false, e.getMessage(), Result.TYPE_ERROR_CANCEL);
            } catch (Exception e) {
                print("Unknown error: " + e.getMessage());
                onSignIn(false, e.getMessage(), Result.TYPE_ERROR_FAILURE);
            }
        } else {
            print("credential is not GoogleIdTokenCredential");
            onSignIn(false, "credential is not GoogleIdTokenCredential",Result.TYPE_ERROR_FAILURE);
        }
    }

    public void signIn() {
        if (isSignedIn()) {
            return;
        }

        try {
            buildCredentialRequest();
        } catch (Exception e) {
            print("sigIn error: " + e.getMessage());
            onSignIn(false, e.getMessage(), Result.TYPE_ERROR_FAILURE);
        }
    }

    private void buildCredentialRequest() {
        GetCredentialRequest request = new GetCredentialRequest.Builder()
                .addCredentialOption(
                        new GetGoogleIdOption.Builder()
                                .setFilterByAuthorizedAccounts(false)
                                .setServerClientId(serverClientId)
                                .setAutoSelectEnabled(false)
                                .build()
                ).build();

        credentialManager.getCredential(context, request, new Continuation<GetCredentialResponse>() {
            @NonNull
            @Override
            public CoroutineContext getContext() {
                return Dispatchers.getIO();
            }

            @Override
            public void resumeWith(@NonNull Object result) {
                if (result instanceof GetCredentialResponse) {
                    GetCredentialResponse response = (GetCredentialResponse) result;
                    handleSignInResult(response);
                } else if (result instanceof kotlin.Result.Failure) {
                    kotlin.Result.Failure failure = (kotlin.Result.Failure) result;

                    if (Objects.requireNonNull(failure.exception.getMessage()).contains("canceled")) {
                        onSignIn(false, "Cancelled by user", Result.TYPE_ERROR_CANCEL);
                    } else {
                        print("Unknown error: " + failure.exception.getMessage());
                        onSignIn(false, failure.exception.getMessage(), Result.TYPE_ERROR_UNKNOWN);
                    }
                }

            }
        });
    }

    public Result signOut() {
        try {
            credentialManager.clearCredentialState(new ClearCredentialStateRequest(), new Continuation<Unit>() {
                @NonNull
                @Override
                public CoroutineContext getContext() {
                    return Dispatchers.getIO();
                }

                @Override
                public void resumeWith(@NonNull Object o) {

                }
            });
            auth.signOut();
            
            return new Result(true, "signOut success", Result.TYPE_SUCCESS);
        } catch (Exception e) {
            print("signOut error: " + e.getMessage());
            return new Result(false, e.getMessage(), Result.TYPE_ERROR_FAILURE);
        }
    }

    public boolean isSignedIn() {
        return auth.getCurrentUser() != null;
    }

    private void print(Object txt) {
        Log.d(TAG, txt.toString());
    }

    private void onSignIn(boolean success, String msg, String type) {
        if (listener != null) {
            listener.onSignIn(new Result(success, msg, type));
        }
    }

    private void onSignIn(boolean success, String msg, String type, GoogleIdTokenCredential credential) {
        if (listener != null) {
            listener.onSignIn(new Result(success, msg, type).setTokenCredential(credential));
        }
    }

    public void setOnSignInListener(OnSignInListener listener) {
        this.listener = listener;
    }

    public interface OnSignInListener {
        void onSignIn(Result result);
    }

    public static class Result {

        public static String TYPE_ERROR_CANCEL = "cancel",
                TYPE_ERROR_UNKNOWN = "unknown",
                TYPE_ERROR_FAILURE = "failure",
                TYPE_SUCCESS = "success";


        private final boolean success;
        private String message;
        private String type;
        private GoogleIdTokenCredential authCredential;

        public Result(boolean success, String message, String type) {
            this.success = success;
            this.message = message;
            this.type = type;
        }

        public Result setTokenCredential(GoogleIdTokenCredential authCredential) {
            this.authCredential = authCredential;
            return this;
        }

        public GoogleIdTokenCredential getTokenCredential() {
            return authCredential;
        }

        public String getType() {
            return type;
        }

        public boolean isSuccess() {
            return success;
        }

        public String getMessage() {
            return message;
        }
    }
}

