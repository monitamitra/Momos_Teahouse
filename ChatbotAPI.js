const OpenAIAPI = require('openai');

const openai = new OpenAIAPI({
  apiKey: 'YOUR_API_KEY', // Replace with your actual API key
});

const generateChatbotResponse = async (userInput) => {
  try {
    const response = await openai.complete.create({
      engine: 'davinci-codex',
      prompt: `User: ${userInput}\nChatGPT: `,
      max_tokens: 150, // Limit the length of the response
    });

    return response.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return 'Error generating response.';
  }
};

// Example usage
const userMessage = 'Hello, what can you do?';
generateChatbotResponse(userMessage).then((botResponse) => {
  console.log('Chatbot:', botResponse);
});
