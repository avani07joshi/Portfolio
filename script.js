const poems = document.querySelectorAll(".poem");

poems.forEach((poem) => {
  const snippet = poem.querySelector(".snippet");
  const fullText = poem.querySelector(".full-text");
  const poemTitle = poem.querySelector("h3");

  snippet.style.display = "block";
  fullText.style.display = "none";

  poem.addEventListener("click", () => {
    snippet.style.display = "none";
    fullText.style.display = "block";
  });

  poem.addEventListener("mouseleave", () => {
    if (fullText.style.display === "block") {
      snippet.style.display = "none";
      fullText.style.display = "block";
    } else {
      snippet.style.display = "block";
      fullText.style.display = "none";
    }
  });
});
