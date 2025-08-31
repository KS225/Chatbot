// import { useRef } from "react";

// const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
//   const inputRef = useRef();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const userMessage = inputRef.current.value.trim();
//     if (!userMessage) return;
//     inputRef.current.value = "";

//     // Add user message immediately
//     // setChatHistory((history) => [...history,  { role: "system", content: "Reply in plain sentences, no markdown, no lists, no bold/italic formatting." },]);
//     setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    

//     // Add temporary "Processing..." message
//     setChatHistory((history) => [...history, { role: "model", text: "Processing..." }]);

//     // Get bot response
//     // const botReply = await generateBotResponse([
//     //   ...chatHistory,
//     //   { role: "user", text: userMessage }
//     // ]);

//     // // Replace "Processing..." with actual reply
//     // setChatHistory((history) => {
//     //   const newHistory = [...history];
//     //   newHistory[newHistory.length - 1] = { role: "model", text: botReply };
//     //   return newHistory;
//     // });

//     // const generateBotResponse = async (history) => {
//     // // Convert chatHistory into Gemini format
//     // const formattedHistory = history.map(msg => ({
//     //     role: msg.role,
//     //     parts: [{ text: msg.text }]
//     // }));

//     // const result = await model.generateContent({
//     //     contents: formattedHistory
//     // });

//     // return result.response.candidates[0].content.parts[0].text;
//   };

//   return (
//     <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Type Here...."
//         className="message-input"
//         required
//       />
//       <button className="material-symbols-rounded">keyboard_arrow_up</button>
//     </form>
//   );
// };

// export default ChatForm;


import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Add user + "Processing..."
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "model", text: "Processing..." }
    ]);

    // Get bot response from App.jsx function
    const botReply = await generateBotResponse([
      ...chatHistory,
      { role: "user", text: userMessage }
    ]);

    // Replace "Processing..." with actual reply
    setChatHistory((history) => {
      const newHistory = [...history];
      newHistory[newHistory.length - 1] = { role: "model", text: botReply };
      return newHistory;
    });
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type Here...."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">keyboard_arrow_up</button>
    </form>
  );
};

export default ChatForm;
