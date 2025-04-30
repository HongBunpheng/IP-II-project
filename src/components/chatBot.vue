<template>
  <div class="chat-container">
    <!-- Header -->
    <div class="chat-header">
      <h2>Chat with us!</h2>
      <button class="close-btn">×</button>
    </div>

    <!-- Chatbot Info -->
    <div class="chatbot-info">
      <div class="bot-avatar-circle">
        <img src="@/assets/message.png" alt="Bot Icon" class="chat-icon" />
        <div class="status-dot"></div>
      </div>
      <div>
        <div class="bot-name">Chatbot</div>
        <div class="bot-role">Support Agent</div>
      </div>
    </div>

    <!-- Chat Body -->
    <div class="chat-body">
      <div v-for="(message, index) in messages" :key="index" class="message-block" :class="message.sender">
        <div class="meta">
          <div v-if="message.sender === 'bot'" class="bot-avatar-circle small">
            <img src="@/assets/message.png" alt="Bot Icon" class="chat-icon small-icon" />
          </div>
          <div class="meta-info">
            {{ message.sender === "bot" ? "Livechat" : "Visitor" }} {{ message.time }}
          </div>
        </div>

        <div class="bubble" :class="message.sender">{{ message.text }}</div>

        <div v-if="message.sender === 'user'" class="read-status">Read</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="chat-footer">
      <input v-model="userInput" @keyup.enter="sendMessage" type="text" placeholder="Write a message" />
      <button class="icon-btn">
        <img src="@/assets/attach-file.png" class="footer-icon" alt="Attach" />
      </button>
      <button class="icon-btn" @click="sendMessage">
        <img src="@/assets/send.png" class="footer-icon" alt="Send" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBot",
  data() {
    return {
      userInput: "",
      messages: [
        {
          sender: "bot",
          text: "Welcome to LiveChat\nI was made with  Pick a topic from the list or type down a question!",
          time: "02:10 PM"
        },
        {
          sender: "bot",
          text: "Welcome to LiveChat",
          time: "02:10 PM"
        }
      ]
    };
  },
  methods: {
    sendMessage() {
      if (!this.userInput.trim()) return;
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      this.messages.push({
        sender: "user",
        text: this.userInput,
        time
      });

      const userMessage = this.userInput.toLowerCase();
      this.userInput = "";

      this.scrollToBottom();

      setTimeout(() => {
        let botReply = "I'm sorry, I didn't quite understand that.";

        if (userMessage.includes("hello") || userMessage.includes("hi")) {
          botReply = "Hello! 👋 How can I assist you today?";
        } else if (userMessage.includes("help")) {
          botReply = "Sure! Let me know what you need help with.";
        } else if (userMessage.includes("price") || userMessage.includes("cost")) {
          botReply = "Our services start from $49/month. 💵";
        } else if (userMessage.includes("bye")) {
          botReply = "Goodbye! Hope to chat with you again. 👋";
        }

        const replyTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        this.messages.push({
          sender: "bot",
          text: botReply,
          time: replyTime
        });

        this.scrollToBottom();
      }, 1000);
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$el.querySelector(".chat-body");
        container.scrollTop = container.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
.chat-container {
  width: 370px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  font-family: "Helvetica Neue", sans-serif;
}

.chat-header {
  background-color: #f9fafa;
  padding: 16px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  color: #2f2f2f;
  position: relative;
  border-bottom: 1px solid #e3e3e3;
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 12px;
  background: none;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
}

.chatbot-info {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.bot-avatar-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #f5f7f6;
  border: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 12px;
}

.bot-avatar-circle.small {
  width: 24px;
  height: 24px;
}

.chat-icon {
  width: 20px;
  height: 20px;
}

.small-icon {
  width: 16px;
  height: 16px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #00c896;
  border-radius: 50%;
  position: absolute;
  right: -2px;
  bottom: 1px;
  border: 2px solid white;
}

.bot-name {
  font-weight: 300;
  font-size: 15px;
}

.bot-role {
  font-size: 13px;
  color: #7c7c7c;
}

.chat-body {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: #f6f8fa;
}

.message-block {
  margin-bottom: 20px;
}

.message-block.user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}


.meta {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.meta-info {
  font-size: 12px;
  color: #999;
}

.bubble {
  display: inline-block;
  padding: 12px 16px;
  font-size: 15px;
  border-radius: 16px;
  white-space: pre-line;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #333;
  max-width: 85%; /* allows long lines but prevents huge blocks */
  width: fit-content;
  line-height: 1.4;
}

.bubble.user {
  background: #00c896;
  color: #fff;
  font-weight: 500;
  border-radius: 18px;
  text-align: right;
  width: fit-content;
  max-width: 85%;
  padding: 12px 16px;
}


.read-status {
  font-size: 11px;
  color: gray;
  margin-top: 4px;
  text-align: right;
}

.message-block.user .meta-info {
  text-align: right;
}

.chat-footer {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eaeaea;
  background: #ffffff;
  box-shadow: 0 -1px 4px rgba(245, 244, 244, 0.04);
}

.chat-footer input {
  flex: 1;
  background: #ffffff;
  padding: 10px 15px;
  border: none; 
  border-radius: 20px;
  font-size: 14px;
  margin-right: 8px;
  outline: none; 
}


.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.footer-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  opacity: 0.85;
  transition: opacity 0.2s ease, filter 0.2s ease;
}

/* Green hover effect */
.icon-btn:hover .footer-icon,
.icon-btn:focus .footer-icon {
  filter: brightness(0) saturate(100%) invert(67%) sepia(79%) saturate(907%) hue-rotate(116deg) brightness(92%) contrast(88%);
  opacity: 1;
}
</style>
