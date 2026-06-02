document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".wa-button");

  if (!button) {
    return;
  }

  const setPressed = (pressed) => button.classList.toggle("is-pressed", pressed);

  button.addEventListener("pointerdown", () => setPressed(true));
  button.addEventListener("pointerup", () => setPressed(false));
  button.addEventListener("pointercancel", () => setPressed(false));
  button.addEventListener("pointerleave", () => setPressed(false));
});
