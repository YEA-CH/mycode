// 这是一个最小实现的插件存储，仅为解决API调用时的错误
import { createPersistStore } from "../utils/store";
import { StoreKey } from "../constant";

export interface PluginType {
  id: string;
  title: string;
  version: string;
  parameters: any[];
  functions: any[];
}

const DEFAULT_PLUGIN_STATE = {
  plugins: [] as PluginType[]
};

// 创建最小实现的插件存储
export const usePluginStore = createPersistStore(
  DEFAULT_PLUGIN_STATE,
  (set, get) => ({
    getAll: () => {
      return get().plugins;
    },
    
    // 添加插件
    add: (plugin: PluginType) => {
      const plugins = get().plugins;
      const existPlugin = plugins.find((p) => p.id === plugin.id);
      if (existPlugin) {
        return;
      }
      plugins.push(plugin);
      set((state) => ({
        plugins: plugins,
      }));
    },
    
    // 删除插件
    remove: (id: string) => {
      const plugins = get().plugins;
      const index = plugins.findIndex((p) => p.id === id);
      if (index === -1) {
        return;
      }
      plugins.splice(index, 1);
      set((state) => ({
        plugins: plugins,
      }));
    },

    // 获取工具函数，返回空数组和空对象
    getAsTools: (pluginIds: string[]) => {
      return [[], {}] as const;
    }
  }),
  {
    name: StoreKey.Plugin,
    version: 1,
  },
);

// 简化的工具函数，返回空数组和空函数对象
export function usePluginTools() {
  return [[], {}] as const;
} 