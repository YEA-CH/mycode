import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIconDefault from "../icons/llm-icons/default.svg";
import BotIconOpenAI from "../icons/llm-icons/openai.svg";
import BotIconGemini from "../icons/llm-icons/gemini.svg";
import BotIconGemma from "../icons/llm-icons/gemma.svg";
import BotIconClaude from "../icons/llm-icons/claude.svg";
import BotIconMeta from "../icons/llm-icons/meta.svg";
import BotIconMistral from "../icons/llm-icons/mistral.svg";
import BotIconDeepseek from "../icons/llm-icons/deepseek.svg";
import BotIconMoonshot from "../icons/llm-icons/moonshot.svg";
import BotIconQwen from "../icons/llm-icons/qwen.svg";
import BotIconWenxin from "../icons/llm-icons/wenxin.svg";
import BotIconGrok from "../icons/llm-icons/grok.svg";
import BotIconHunyuan from "../icons/llm-icons/hunyuan.svg";
import BotIconDoubao from "../icons/llm-icons/doubao.svg";
import BotIconChatglm from "../icons/llm-icons/chatglm.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  // Whoever owns this Content Delivery Network (CDN), I am using your CDN to serve emojis
  // Old CDN broken, so I had to switch to this one
  // Author: https://github.com/H0llyW00dzZ
  return `https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string; isUser?: boolean }) {
  // 使用固定的本地头像（仅适用于用户头像，不适用于面具头像）
  const useLocalAvatar = true; // 设置为true启用本地头像
  const localAvatarPath = "/avatars/my-avatar.png"; // 相对于public目录的路径
  
  // 判断是否为用户头像 - 现在明确使用isUser参数
  const isUserAvatar = props.isUser === true || 
                      (!props.model && props.avatar === "1f603"); // 默认用户头像为1f603
  
  // 如果是模型头像，使用原有逻辑
  if (props.model) {
    let LlmIcon = BotIconDefault;

    const modelName = props.model.toLowerCase();

    if (
      modelName.startsWith("gpt") ||
      modelName.startsWith("chatgpt") ||
      modelName.startsWith("dall-e") ||
      modelName.startsWith("dalle") ||
      modelName.startsWith("o1") ||
      modelName.startsWith("o3")
    ) {
      LlmIcon = BotIconOpenAI;
    } else if (modelName.startsWith("gemini")) {
      LlmIcon = BotIconGemini;
    } else if (modelName.startsWith("gemma")) {
      LlmIcon = BotIconGemma;
    } else if (modelName.startsWith("claude")) {
      LlmIcon = BotIconClaude;
    } else if (modelName.includes("llama")) {
      LlmIcon = BotIconMeta;
    } else if (modelName.startsWith("mixtral") || modelName.startsWith("codestral")) {
      LlmIcon = BotIconMistral;
    } else if (modelName.includes("deepseek")) {
      LlmIcon = BotIconDeepseek;
    } else if (modelName.startsWith("moonshot")) {
      LlmIcon = BotIconMoonshot;
    } else if (modelName.startsWith("qwen")) {
      LlmIcon = BotIconQwen;
    } else if (modelName.startsWith("ernie")) {
      LlmIcon = BotIconWenxin;
    } else if (modelName.startsWith("grok")) {
      LlmIcon = BotIconGrok;
    } else if (modelName.startsWith("hunyuan")) {
      LlmIcon = BotIconHunyuan;
    } else if (modelName.startsWith("doubao") || modelName.startsWith("ep-")) {
      LlmIcon = BotIconDoubao;
    } else if (
      modelName.includes("glm") ||
      modelName.startsWith("cogview-") ||
      modelName.startsWith("cogvideox-")
    ) {
      LlmIcon = BotIconChatglm;
    }

    return (
      <div className="no-dark">
        <LlmIcon className="user-avatar" width={30} height={30} />
      </div>
    );
  }

  // 如果是用户头像且启用了本地头像，使用本地图片
  if (isUserAvatar && useLocalAvatar) {
    return (
      <div className="user-avatar">
        <img 
          src={localAvatarPath} 
          alt="User Avatar" 
          width={30} 
          height={30} 
          style={{ borderRadius: "50%" }} 
        />
      </div>
    );
  }

  // 原有的emoji头像逻辑作为备用
  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
