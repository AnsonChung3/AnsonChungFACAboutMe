document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hello-btn");
  const msg = document.getElementById("message");

  btn.addEventListener("click", () => {
    alert("Hello from JavaScript! 🎉");
  });
});
