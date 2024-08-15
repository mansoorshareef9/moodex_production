// global.d.ts
declare global {
    interface Window {
      ethereum?: {
        isMetaMask?: boolean;
        request?: (args: { method: string; params?: Array<any> }) => Promise<any>;
        on?: (event: string, callback: (...args: any[]) => void) => void;
      };
    }
  }
  
  export {};