<template>
    <div class="chat-container">
      <!-- Header -->
      <div class="chat-header">
        <h2>Chat with us!</h2>
        <button class="close-btn">×</button>
      </div>
  
      <!-- Chatbot Info -->
      <div class="chatbot-info">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" class="bot-avatar" />
        <div>
          <div class="bot-name">Chatbot</div>
          <div class="bot-role">Support Agent</div>
        </div>
      </div>
  
      <!-- Chat Body -->
      <div class="chat-body">
        <div v-for="(message, index) in messages" :key="index" class="message-block" :class="message.sender">
          <div class="meta">
            <img v-if="message.sender === 'bot'" src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" class="meta-avatar" />
            <div class="meta-info">
              {{ message.sender === 'bot' ? 'Livechat' : 'Visitor' }} {{ message.time }}
            </div>
          </div>
  
          <div class="bubble" :class="message.sender">
            {{ message.text }}
          </div>
  
          <div v-if="message.sender === 'user'" class="read-status">Read</div>
        </div>
      </div>
  
      <!-- Chat Footer -->
      <div class="chat-footer">
        <input v-model="userInput" @keyup.enter="sendMessage" type="text" placeholder="Write a message" />
        <button class="attach-btn">📎</button>
        <button class="send-btn" @click="sendMessage">➤</button>
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
          { sender: "bot", text: "Welcome to LiveChat\nI was made with Pick a topic from the list or type down a question!", time: "02:10 PM" },
          { sender: "bot", text: "Welcome to LiveChat", time: "02:10 PM" },
        ],
      };
    },
    methods: {
      sendMessage() {
        if (!this.userInput.trim()) return;
  
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
        // Push user message
        this.messages.push({
          sender: "user",
          text: this.userInput,
          time: time,
        });
  
        const userMessage = this.userInput.toLowerCase();
        this.userInput = "";
  
        this.scrollToBottom();
  
        // Simulate bot reply after short delay
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
  
          const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
          this.messages.push({
            sender: "bot",
            text: botReply,
            time: replyTime,
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
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    width: 370px;
    height: 600px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    font-family: 'Arial', sans-serif;
  }
  
  .chat-header {
    background-color: #f7f8fa;
    padding: 16px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    right: 15px;
    top: 14px;
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
  
  .chatbot-info {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #e6e6e6;
  }
  
  .bot-avatar {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
  
  .bot-name {
    font-weight: bold;
  }
  
  .bot-role {
    font-size: 13px;
    color: #7c7c7c;
  }
  
  .chat-body {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    background: #fafafa;
  }
  
  .message-block {
    margin-bottom: 20px;
  }
  
  .meta {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  
  .meta-avatar {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .meta-info {
    font-size: 12px;
    color: gray;
  }
  
  .bubble {
    max-width: 75%;
    padding: 14px 18px;
    font-size: 14px;
    border-radius: 12px;
    white-space: pre-line;
    background: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
    color: #333;
  }
  
  .bubble.user {
    background: #00c896;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-left: auto;
    border-radius: 20px;
  }
  
  .read-status {
    font-size: 11px;
    color: gray;
    margin-top: 5px;
    text-align: right;
  }
  
  .chat-footer {
    padding: 10px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e6e6e6;
    background: #f7f8fa;
  }
  
  .chat-footer input {
    flex: 1;
    border: none;
    background: #fff;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 14px;
    margin-right: 8px;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .attach-btn {
    background: none;
    border: none;
    font-size: 22px;
    margin-right: 5px;
    cursor: pointer;
  }
  
  .send-btn {
    background: none;
    border: none;
    font-size: 22px;
    color: #00c896;
    cursor: pointer;
  }
  </style>
  