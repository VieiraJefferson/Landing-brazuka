export const scrollToAppTypes = () => {
  const appTypesSection = document.getElementById("app-types-section");
  if (appTypesSection) {
    appTypesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

