// javascript.js
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  const jumbotron = document.createElement("div");
  jumbotron.classList.add("jumbotron");

  const logo = document.createElement("img");
  logo.src = "https://via.placeholder.com/150";
  logo.alt = "Logo";

  const title = document.createElement("h2");
  title.textContent = "Welcome to Our Website";
  title.classList.add("text-3xl", "font-bold", "mb-4");

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  description.classList.add("text-gray-700", "mb-6");

  const button = document.createElement("a");
  button.href = "#";
  button.textContent = "Learn More";
  button.classList.add("btn-primary");

  jumbotron.appendChild(logo);
  jumbotron.appendChild(title);
  jumbotron.appendChild(description);
  jumbotron.appendChild(button);

  root.appendChild(jumbotron);
});
