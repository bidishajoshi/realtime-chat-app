const socket = io();

const form = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");
const usernameInput = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();
  if (username && message) {
    socket.emit("chatMessage", { username, message });
    messageInput.value = "";
  }
});

socket.on("message", (data) => {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message");
  msgDiv.textContent = `${data.username}: ${data.message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
});
