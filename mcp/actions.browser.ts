// 浏览器环境下的MCP actions替代品
import { ServerStatusResponse } from "./types";

// 模拟实现，在浏览器环境中使用
export async function getClientsStatus(): Promise<Record<string, ServerStatusResponse>> {
  console.log("[MCP Browser] getClientsStatus called");
  return {};
}

export async function getClientTools(clientId: string) {
  console.log("[MCP Browser] getClientTools called");
  return null;
}

export async function getAvailableClientsCount() {
  console.log("[MCP Browser] getAvailableClientsCount called");
  return 0;
}

export async function getAllTools() {
  console.log("[MCP Browser] getAllTools called");
  return [];
}

export async function initializeMcpSystem() {
  console.log("[MCP Browser] initializeMcpSystem called");
  return null;
}

export async function isMcpEnabled() {
  console.log("[MCP Browser] isMcpEnabled called");
  return false;
}

// 其他函数的模拟实现
export async function executeMcpAction(clientId: string, request: any) {
  console.log("[MCP Browser] executeMcpAction called");
  return { success: false, result: "MCP not supported in browser" };
} 