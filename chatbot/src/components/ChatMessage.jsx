// // import ChatbotIcon from "./ChatbotIcon";
// // import ReactMarkdown from "react-markdown";

// // const ChatMessage = ({ chat }) => {
// //   return (
// //     <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
// //       {chat.role === "model" && <ChatbotIcon />}
// //       {/* <p className="message-text">{chat.text}</p> */}
// //       <ReactMarkdown className="message-text prose prose-sm">
// //         {chat.text}
// //       </ReactMarkdown>

// //     </div>
// //   );
// // };

// // export default ChatMessage;

// import ChatbotIcon from "./ChatbotIcon";
// import ReactMarkdown from "react-markdown";

// const ChatMessage = ({ chat }) => {
//   return (
//     <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
//       {chat.role === "model" && <ChatbotIcon />}
      
//       <ReactMarkdown
//         components={{
//           p: ({node, ...props}) => <p className="message-text" {...props} />,
//           li: ({node, ...props}) => <li className="list-disc ml-5" {...props} />,
//         }}
//       >
//         {chat.text}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default ChatMessage;

import ChatbotIcon from "./ChatbotIcon";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${
        chat.role === "model" ? "bot" : "user"
      }-message`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <div className="message-text">
        <ReactMarkdown>{chat.text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;
