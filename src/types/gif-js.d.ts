declare module "gif.js" {
  export default class GIF {
    constructor(options: {
      workers?: number;
      quality?: number;
      width?: number;
      height?: number;
      workerScript?: string;
      background?: string;
      transparent?: string | number | null;
    });

    addFrame(
      frame: HTMLCanvasElement | CanvasRenderingContext2D,
      options?: { delay?: number; copy?: boolean }
    ): void;
    on(event: "finished", callback: (blob: Blob) => void): void;
    on(event: "progress", callback: (progress: number) => void): void;
    render(): void;
  }
}

declare module "gif.js/dist/gif.worker.js?url" {
  const workerUrl: string;
  export default workerUrl;
}
