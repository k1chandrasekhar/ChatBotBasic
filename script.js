const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const userMessage = userInput.value;
  appendMessage("You: " + userMessage);

  // Simple logic to determine bot's response
  let botResponse = "";
  if (userMessage.toLowerCase().includes("hello")) {
    botResponse = "Bot: Hi there!";
  } else {
    botResponse = "Bot: I didn't understand. Can you please clarify?";
  }

  appendMessage(botResponse);

  // Clear user input
  userInput.value = "";
}

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}
