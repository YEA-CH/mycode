// 简化版日志记录器，支持浏览器环境

export class MCPClientLogger {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(message: string): void {
    console.log(`[${this.name}] INFO: ${message}`);
  }

  success(message: string): void {
    console.log(`[${this.name}] SUCCESS: ${message}`);
  }

  warning(message: string): void {
    console.warn(`[${this.name}] WARNING: ${message}`);
  }

  error(message: string): void {
    console.error(`[${this.name}] ERROR: ${message}`);
  }
}
