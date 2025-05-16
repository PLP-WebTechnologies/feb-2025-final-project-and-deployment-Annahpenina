document.getElementById('menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show");
});
