import { useLocation } from "react-router-dom"; // Hook para acessar a localização atual da URL
import { useEffect } from "react"; // Hook para executar efeitos colaterais

const NotFound = () => {
  // Hook que retorna a localização da URL atual
  const location = useLocation();

  useEffect(() => {
    // Quando a localização mudar, loga um erro no console para indicar que a página não foi encontrada
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname // Caminho da URL que gerou o erro 404
    );
  }, [location.pathname]); // O efeito será executado sempre que a URL mudar

  return (
    // Div principal que ocupa toda a tela e centraliza o conteúdo
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Título da página 404 */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* Mensagem de erro */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        
        {/* Link para retornar à página inicial */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
