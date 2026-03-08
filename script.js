// Remove o loader com pequena transicao apos o carregamento da pagina.
window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  setTimeout(function () {
    loader.classList.add("hide");
  }, 450);
});

// Animacao leve de entrada quando cada bloco aparece na tela.
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (element) {
  observer.observe(element);
});
