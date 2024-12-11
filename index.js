//alert("GOD");
function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "God is good",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
