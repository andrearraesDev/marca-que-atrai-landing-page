import * as React from "react";

// Definindo o ponto de quebra (breakpoint) para telas móveis
const MOBILE_BREAKPOINT = 768;

// Hook customizado para verificar se o dispositivo é mobile
export function useIsMobile() {
  // Estado para armazenar se é mobile ou não
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // MediaQuery para detectar dispositivos menores que o ponto de quebra (768px)
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função que será chamada quando a largura da tela mudar
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT); // Atualiza o estado com a nova largura
    };

    // Adiciona o ouvinte de evento para mudanças no MediaQuery
    mql.addEventListener("change", onChange);

    // Define o estado inicial com base na largura da tela atual
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup: remove o ouvinte de evento quando o componente for desmontado
    return () => mql.removeEventListener("change", onChange);
  }, []); // O useEffect é executado apenas uma vez, após o primeiro render

  // Retorna se o dispositivo é mobile (true ou false)
  return !!isMobile;
}