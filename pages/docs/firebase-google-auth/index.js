'use client';
import { useEffect, useState } from 'react';
import CodeView from "../../../components/CodeView"


const Header = ({ title, description }) => (
    <header className="mb-8 mt-20">
        <h1 className="text-4xl font-bold">{title}</h1>
        {description && <p className="text-lg mt-4">{description}</p>}
    </header>
);

const CodeSection = ({ title, description, code, language = "java" }) => (
    <section className="code-desc-box mb-8">
        <h2 className="font-semibold mt-5 mb-1 text-2xl">{title}</h2>
        {description && <div className="description text-lg mb-4">{description}</div>}
        <CodeView className="rounded styled-scroll" code={code} language={language} />
    </section>
);

const Marker = ({ text }) => (
    <label className="bg-marker-color text-marker-color-text rounded p-0.5">
        {text}
    </label>
);

const UrlMarker = ({ text, link }) => (
    <a className="text-blue-400 p-0.5 underline hover:text-blue-300" href={link} target='_blank'>
        {text}
    </a>
);


const DownloadButton = ({ onClick, label }) => (
    <div className="download-area text-center">
        <button
            onClick={onClick}
            className="bg-blue-800 p-3 text-white rounded shadow-lg drop-shadow-md"
        >
            {label}
        </button>
    </div>
);

export default function Page() {
    const handleDownload = () => {
        window.location.href = "/api/download?name=GoogleSignInClient.java";
    };

    return (
        <div className="p-4">
            <Header
                title="Firebase Google SignIn Client"
                description={
                    <>
                        A classe GoogleSignInClient foi projetada para gerenciar o fluxo de autenticação de usuários usando o Google Sign-In em uma aplicação Android. Essa implementação utiliza o Firebase Authentication e Credential Manager para autenticar usuários e gerenciar tokens de credenciais com segurança. 
                        <br />
                        A classe tem como base o <UrlMarker text="Credential Manager" link='https://developer.android.com/identity/sign-in/credential-manager-siwg?hl=pt-br'/> feito em Kotlin.

                    </>
                }
            />

            {/* Dependências */}
            <CodeSection
                title="Dependências Necessárias"
                description={
                    <>
                        Adicione as dependências necessárias no arquivo <Marker text="build.gradle" /> do seu módulo (geralmente{" "}
                        <Marker text="app/build.gradle" />):
                    </>
                }
                code={`dependencies {

  implementation "androidx.credentials:credentials:<latest version>"
  implementation "androidx.credentials:credentials-play-services-auth:<latest version>"
  implementation "com.google.android.libraries.identity.googleid:googleid:<latest version>"

  //Firebase Auth
  implementation (platform("com.google.firebase:firebase-bom:32.3.1"))
  implementation "com.google.firebase:firebase-auth"
  implementation "com.google.android.gms:play-services-auth:20.7.0"
}`}
                language="groovy"
            />

            {/* Construtor */}
            <CodeSection
                title="Construtor"
                description={
                    <>
                        <p className="mb-2">O construtor da classe recebe dois parâmetros:</p>
                        <ul>
                            <li><Marker text="Context ctx" />: O contexto da aplicação</li>
                            <li><Marker text="String serverClientId" />: O client_id gerado no Console do Google APIs ou no Firebase Authenticator.</li>
                        </ul>
                    </>
                }
                code={`GoogleSignInClient googleSignInClient = new GoogleSignInClient(context, "SEU_SERVER_CLIENT_ID");`}
            />

            {/* Métodos */}
            <h2 className="font-semibold mt-5 mb-1 text-2xl">Métodos</h2>

            <CodeSection
                title="Login"
                description={
                    <>
                        Inicia o processo de autenticação do usuário:
                        <ul className="list-disc list-inside">
                            <li>Verifica se o usuário já está autenticado.</li>
                            <li>Constrói uma solicitação de credencial usando o <Marker text="CredentialManager" />.</li>
                            <li>Lida com os resultados (sucesso ou erro).</li>
                        </ul>
                    </>
                }
                code={`googleSignInClient.setOnSignInListener(result -> {
  if (result.isSuccess()) {
      Log.d("SignIn", "Login bem-sucedido: " + result.getTokenCredential().getIdToken());
  } else {
      Log.e("SignIn", "Erro no login: " + result.getMessage());
  }
});
googleSignInClient.signIn();`}
            />

            <CodeSection
                title="Sair da conta"
                description={
                    <>
                        Desconecta o usuário, limpando os dados de autenticação e credenciais salvas.
                        <p><strong>Retorno</strong>: Um objeto <Marker text="Result" /> indicando o sucesso ou falha da operação.</p>
                    </>
                }
                code={`Result result = googleSignInClient.signOut();
if (result.isSuccess()) {
  Log.d("SignOut", "Usuário desconectado com sucesso.");
} else {
  Log.e("SignOut", "Erro ao desconectar: " + result.getMessage());
}`}
            />

            <CodeSection
                title="Verificar autenticação"
                description={
                    <>
                        Verifica se há um usuário autenticado atualmente.
                        <p><strong>Retorno</strong>: <Marker text="true" /> se um usuário estiver autenticado; caso contrário, <Marker text="false" />.</p>
                    </>
                }
                code={`if (googleSignInClient.isSignedIn()) {
  Log.d("Check", "Usuário já autenticado.");
} else {
  Log.d("Check", "Usuário não autenticado.");
}`}
            />

            {/* Modelo de Uso */}
            <CodeSection
                title="Modelo de Uso"
                code={`public class MainActivity extends AppCompatActivity {

  private GoogleSignInClient googleSignInClient;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      googleSignInClient = new GoogleSignInClient(this, "SEU_SERVER_CLIENT_ID");

      googleSignInClient.setOnSignInListener(result -> {
          if (result.isSuccess()) {
              Log.d("Login", "Login realizado com sucesso!");
          } else {
              Log.e("Login", "Erro: " + result.getMessage());
          }
      });

      findViewById(R.id.loginButton).setOnClickListener(view -> googleSignInClient.signIn());
      findViewById(R.id.logoutButton).setOnClickListener(view -> {
          Result result = googleSignInClient.signOut();
          if (result.isSuccess()) {
              Log.d("Logout", "Desconectado com sucesso!");
          } else {
              Log.e("Logout", "Erro ao desconectar.");
          }
      });
  }
}`}
            />

            {/* Botão de Download */}
            <DownloadButton onClick={handleDownload} label="Fazer Download da Classe" />
        </div>
    );
}
