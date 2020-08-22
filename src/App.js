import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Tommy", text: "What is going on" },
  ]);
  const [username, setUsername] = useState("");

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    setUsername(prompt("Please enter you name"));
  }, []); // condition

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80" />
      <h1>Facebook Messenger App</h1>
      <h2>Welcome "{username}"</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message..</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <Button
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
