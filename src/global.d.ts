export {};

declare global {
  interface Window {
    gtag: (command: "config" | "event", eventName: string, params?: Record<string, string | number | boolean>) => void;
  }
}
