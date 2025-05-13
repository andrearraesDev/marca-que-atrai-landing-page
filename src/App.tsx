// Importação de componentes e pacotes
import { Toaster } from "@/components/ui/toaster"; // Notificação via Toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Notificação alternativa via Sonner
import { TooltipProvider } from "@/components/ui/tooltip"; // Fornece tooltips (dicas de ferramenta)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Gerenciamento de estado de dados com React Query
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Roteamento da aplicação com react-router
import Index from "./pages/Index"; // Página inicial
import NotFound from "./pages/NotFound"; // Página de erro 404 (não encontrada)
import { Analytics } from "@vercel/analytics/react"; // Coleta de dados de análise para o site
import 'font-awesome/css/font-awesome.min.css'; // Importação de ícones do Font Awesome

// Instanciação do cliente React Query para gerenciamento de cache e estado
const queryClient = new QueryClient();

// Componente principal da aplicação
const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Provedor de Tooltips (dicas de ferramenta) */}
    <TooltipProvider>
      {/* Notificações gerais da aplicação */}
      <Toaster />
      <Sonner />
      
      {/* Configuração do roteamento da aplicação */}
      <BrowserRouter>
        <Routes>
          {/* Rota principal da aplicação */}
          <Route path="/" element={<Index />} />
          
          {/* Rota catch-all para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>

    {/* Coleta de dados de análise para o Vercel */}
    <Analytics />
  </QueryClientProvider>
);

// Exportação do componente App
export default App;
