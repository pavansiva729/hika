function toggleInfo() {
  const extra = document.getElementById("extraInfo");
  const button = document.querySelector("button");

  if (extra.style.display === "none" || extra.style.display === "") {
    extra.style.display = "block";
    button.textContent = "Show Less";
  } else {
    extra.style.display = "none";
    button.textContent = "Show More";
  }
}