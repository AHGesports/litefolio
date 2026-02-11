/// <reference types="astro/client" />

declare global {
  interface Window {
    osInstance: any;
    osScrollTo: ((target: number | Element, options?: { behavior?: 'smooth' | 'instant' | 'auto' }) => void) | undefined;
  }
}

export {};
