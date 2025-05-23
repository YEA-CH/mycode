// 浏览器环境下的MCP客户端模拟实现
import { MCPClientLogger } from "./logger";
import { ListToolsResponse, McpClientData, McpRequestMessage, ServerConfig } from "./types";

const logger = new MCPClientLogger("Browser MCP");

// 模拟客户端类型
export type MockClient = {
  id: string;
  config: ServerConfig;
};

// 模拟客户端实现
export async function createClient(clientId: string, serverConfig: ServerConfig): Promise<MockClient> {
  // 在浏览器环境中，我们只返回一个模拟对象
  logger.info(`Creating mock client for ${clientId}`);
  return {
    id: clientId,
    config: serverConfig
  };
}

// 模拟工具列表
export async function listTools(client: MockClient): Promise<ListToolsResponse> {
  logger.info(`Listing tools for client ${client.id}`);
  return { tools: [] };
}

// 模拟执行请求
export async function executeRequest(client: MockClient, request: McpRequestMessage): Promise<any> {
  logger.info(`Execute request for client ${client.id}`);
  return {
    result: "Browser environment does not support MCP execution",
    success: false
  };
}

// 模拟移除客户端
export async function removeClient(client: MockClient): Promise<void> {
  logger.info(`Removing client ${client.id}`);
}

// 导出一个空的客户端映射
export const clientsMap = new Map<string, McpClientData>(); 