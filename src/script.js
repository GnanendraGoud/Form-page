
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    document.getElementById("nameError").innerText = "Name is required.";
    valid = false;
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  if (!message) {
    document.getElementById("messageError").innerText = "Message is required.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = \`\${task} <button onclick="this.parentElement.remove()">❌</button>\`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
