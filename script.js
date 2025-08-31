const button = document.getElementById("hello-btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  button.textContent = "Oh you clicked me!";
  message.textContent = "Hello from JavaScript! 🎉";
  alert('alert text');
  console.log('print in console');
});

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const list = document.getElementById("testList");

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}
