// Importa a função `clsx` para combinar classes condicionalmente
import { clsx, type ClassValue } from "clsx";
// Importa a função `twMerge` para evitar conflitos de classes do Tailwind CSS
import { twMerge } from "tailwind-merge";

// Função utilitária para combinar classes do Tailwind CSS de forma segura
export function cn(...inputs: ClassValue[]) {
  // `clsx` combina as classes condicionalmente, e `twMerge` resolve conflitos do Tailwind CSS.
  return twMerge(clsx(inputs));
}
