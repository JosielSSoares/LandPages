
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateX(0)"; // Move para posição original
          entry.target.style.opacity = "1"; // Torna visível
          entry.target.style.position = "relative"; // Volta ao fluxo normal
          observer.unobserve(entry.target); // Evita reanimação
        }
      });
    },
    { threshold: 0.01 }
  );

  sections.forEach((section) => {
    section.style.transform = "translateX(100%)"; // Move para fora da tela à direita
    section.style.opacity = "0"; // Inicia com opacidade 0
    observer.observe(section);
  });

  sections.forEach((section) => observer.observe(section));
});

