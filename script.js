const button = document.getElementById("hello-btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  button.textContent = "Oh you clicked me!";
  message.textContent = "Hello from JavaScript! 🎉";
  alert('alert text');
  console.log('print in console');
});
