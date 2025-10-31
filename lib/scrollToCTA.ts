export const scrollToCTA = () => {
  const ctaSection = document.getElementById("cta-section");
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

