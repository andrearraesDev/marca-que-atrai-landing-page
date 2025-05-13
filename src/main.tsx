// Importação do método para criar o root da aplicação no DOM
import { createRoot } from 'react-dom/client'

// Importação do componente principal da aplicação
import App from './App.tsx'

// Importação dos estilos globais
import './index.css'

// Importação da ferramenta de coleta de dados de análise para o Vercel
import { Analytics } from "@vercel/analytics/react";

// Criação do root da aplicação e renderização do componente App
createRoot(document.getElementById("root")!).render(<App />);

// Renderiza a aplicação na DOM, dentro do elemento com o id 'root'.
