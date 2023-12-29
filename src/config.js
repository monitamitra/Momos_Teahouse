import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import LearningOptions from './LearningOptions';
import LinkList from './LinkList';

const config = { 
  botName: "Momo",
  initialMessages: [createChatBotMessage("Hi, I'm Momo, Momo's Teahouse's Virtual Agent. How can I help you today?"), 
  createChatBotMessage("I can provide more information on Momo's Teahouse products, assist with purchasing, and more!"), 
  createChatBotMessage("How can I help you today?")],
  widgets: [
    {
        widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />
    }, 
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        options: [
            {
              text: "Introduction to JS",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
            {
              text: "Mozilla JS Guide",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Frontend Masters",
              url: "https://frontendmasters.com",
              id: 3,
            },
          ],
      }

  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0F52BA",
    },
    chatButton: {
      backgroundColor: "#0F52BA",
    },
  },
}

export default config