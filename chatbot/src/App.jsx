import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";


const App = () => {
  const[chatHistory, setChatHistory]= useState([]);


const generateBotResponse = async (history) => {
  const formattedHistory = history.map(({ role, text }) => ({
    role,
    parts: [{ text }]
  }));

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API_URL}?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    });

    const rawText = await response.text();
    console.log("Raw response:", rawText);

    if (!response.ok) throw new Error(rawText);

    const data = JSON.parse(rawText);
    // let botReply =
    //   data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply";

    // // 🔹 Strip Markdown formatting (bold, lists, etc.)
    // botReply = botReply
    //   .replace(/\*\*(.*?)\*\*/g, "$1") // remove bold
    //   .replace(/`(.*?)`/g, "$1")       // remove inline code
    //   .replace(/^- /gm, "-")           // normalize bullet points
    //   .replace(/\n+/g, " ");           // flatten newlines to spaces

    // return botReply || "⚠️ No reply";
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No reply";
  } catch (error) {
    return "⚠️ Error: " + error.message;
  }
};



  return (
    <div className="container">
      <div className="chatbot-popup">
        {/*Chatbot Header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/*Chatbot Body*/}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋
            </p>
          </div>
          {/*Render the chat history dynamically*/ }
          {chatHistory.map((chat,index) => (
            <ChatMessage key={index} chat={chat} />
            ))}
          
        </div>
        {/*Chatbot Footer*/}
        <div className="chat-footer">
        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};
export default App
