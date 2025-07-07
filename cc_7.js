const input = document.getElementById("cta-update");
const button = document.getElementById("cta-input");
const ctaHeadline = document.getElementById("update-cta");

button.addEventListener("click", () => {
  const newText = input.value.trim();
  if (newText !=="") {
    ctaHeadline.textContent = newText;
    input.value = "";
  }
});
