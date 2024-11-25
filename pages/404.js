export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-xl mt-4">Oops! Página não encontrada.</p>
        <a href="/" className="mt-6 text-blue-500 hover:underline">
          Voltar para a página inicial
        </a>
      </div>
    );
  }
  