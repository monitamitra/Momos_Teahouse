import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      try {
        const response = await axios.post("https://api.chatpdf.com/v1/chats/message", {
          "x-api-key": "sec_RgneDnOhHBRFf84avjGujEq33ovkpyZ9",
          "sourceId": "src_cha_V4yrBPl8I3SFkSww5C6l6", 
          "messages": {
            "role":"user", 
            "content": input
          }
        });

        const botReply = { text: response.data.content, sender: "bot" };
        setMessages([...messages, botReply]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className={styles.chatbotIcon}>
      {!isOpen && (
        <div className={styles.chatbotClosed} onClick={toggleChatbot}>
          <span className={styles.chatIcon}>Chat</span>
        </div>
      )}
      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatHeader}>
            <span>Chat with Us</span>
            <button className={styles.closeButton} onClick={toggleChatbot}>
              X
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === 'user' ? styles.user : styles.bot}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.inputField}
            />
            <button onClick={sendMessage} className={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );

}

export default Chatbot;