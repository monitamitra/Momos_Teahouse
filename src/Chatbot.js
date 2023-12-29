import React, { useState } from "react";
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
      const newUserMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setInput('');

      const headers = {
        'x-api-key': `${window.env.REACT_APP_API_KEY}`,
      };
      
      const requestData = {
        sourceId: `${window.env.REACT_APP_SOURCE_ID}`,
        messages: [
          {
            role: 'user',
            content: input,
          },
        ],
      };

      try {
        
        const response = await axios.post("https://api.chatpdf.com/v1/chats/message", requestData, {headers});

        const botReply = { text: response.data.content, sender: "bot" };
        setMessages(prevMessages => [...prevMessages, botReply]);
        
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className={styles.chatbotIcon}>
      {!isOpen && (
        <div className={styles.chatbotClosed} onClick={toggleChatbot}>
           <img style={{ width: '45px', height: '45px' }} 
            src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" alt="Chat Icon" className="chatIconImage" />
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
                className={`${styles.message} ${msg.sender === 'user' ? styles.user : styles.bot}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <textarea
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