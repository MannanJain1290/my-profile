document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("cta").addEventListener("click", () => {
  const name = document.getElementById("name").textContent;
  alert(`Hey ${name}! Nice to meet you.`);
});
