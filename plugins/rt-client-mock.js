// 模拟rt-client实现
module.exports = {
  // 添加所需的空方法和属性
  Voice: {}, // 空枚举
  Client: class {
    constructor() {}
    static create() { return new this(); }
    connect() { return Promise.resolve(this); }
    disconnect() { return Promise.resolve(); }
    startConversation() { return Promise.resolve({}); }
  }
}; 