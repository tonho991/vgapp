import React, { createContext, useState, useContext, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Função para adicionar um novo Toast
  const addToast = useCallback((message, type = "info") => {
    const id = Math.random().toString(36).substr(2, 9); // Gera um ID único
    setToasts((currentToasts) => [...currentToasts, { id, message, type }]);

    // Remove o Toast após 3 segundos
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={addToast} className="">
      {children}

      {/* Container para os Toasts */}
      <div className="fixed top-5 right-5 space-y-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded shadow-lg text-white flex justify-center ${
              toast.type === "success"
                ? "bg-green-500"
                : toast.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          >
            <span className="material-icons">{toast.type === "success" ? "check_circle" : toast.type === "error" ? "error" : "info"}</span>
            &nbsp;
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Hook para usar o Toast
export const useToast = () => {
  return useContext(ToastContext);
};
