import React, { useState, useEffect } from "react";
//import "./Chatbot.css"; // Create this CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [message1, setMessage1] = useState([]);
  const [botResponses, setBotResponses] = useState([]); // Bot messages
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [visible, setVisible] = useState(true);

  // Fetch services from API
  const getMessage = () => {
    fetch("http://localhost:2222/survey")
      .then((response) => response.json())
      .then((info) => {
        setMessages(info);
        console.log(info);
      });
  };

  useEffect(() => {
    getMessage();
  }, []);

  const handleSendMessage = () => {
    if (input === "") {
      setErrorMessage("Type Something To Search");
    } else {
      let foundMessages = messages.filter((mymsg) =>
        mymsg.name.toLowerCase().includes(input.toLowerCase())
      );

      if (foundMessages.length > 0) {
        setMessage1([...message1, { text: input, sender: "user" }]);
        setErrorMessage("");

        // Delayed bot response
        setTimeout(() => {
          let botReplies = foundMessages.map((msg) => ({
            text: msg.name,
            sender: "bot",
          }));
          setBotResponses([...botResponses, ...botReplies]);
        }, 5000);
      } else {
        setErrorMessage("No matching service found.");
      }
    }
    setInput("");
  };


  return (
    visible && (
      <div className="chatbot-container">
        <div className="chatbot-card">
          <div className="chatbot-header">
            <div className="header-content">
              <i className="fas fa-robot me-2"></i>
              Survey Assistant
            </div>
            <button
              className="close-btn"
              onClick={() => setVisible(false)}
            >
              &times;
            </button>
          </div>
          
          <div className="chat-messages">
            {/* Bot Introduction Message */}
            <div className="message bot">
              <div className="message-content">
                Hello! I'm here to help you with survey information. 
                Ask me anything about survey entries!
              </div>
            </div>

            {message1.map((msg, index) => (
              <div key={index} className="message user">
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}

            {botResponses.map((msg, index) => (
              <div key={index} className="message bot">
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}

            {errorMessage && 
              <div className="error-message">
                {errorMessage}
              </div>
            }
          </div>

          <div className="chat-input">
            <div className="input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="send-btn"
                onClick={handleSendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Chatbot;