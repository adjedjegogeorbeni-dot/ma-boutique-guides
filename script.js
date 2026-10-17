(function(){
  const config = window.STORE_CONFIG || {};
  const brand = config.BRAND_NAME || "VOTRE MARQUE";
  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = brand);
  document.title = brand + " — " + (config.PRODUCT_NAME || "Guide numérique");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const checkout = (config.CHECKOUT_URL || "").trim();
  const warning = document.getElementById("setup-warning");
  if (warning && checkout && checkout.startsWith("https://")) warning.hidden = true;
  document.querySelectorAll(".buy-link").forEach(link => {
    if (checkout && /^https:\/\//i.test(checkout)) {
      link.href = checkout;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.addEventListener("click", () => {
        if (warning) warning.hidden = true;
      });
    } else {
      link.href = "#acheter";
      link.addEventListener("click", function(event) {
        event.preventDefault();
        if (warning) {
          warning.textContent = "Le lien d’achat n’est pas encore configuré. Ajoute l’URL de ton produit dans config.js.";
          warning.hidden = false;
          warning.scrollIntoView({behavior:"smooth", block:"center"});
        }
      });
    }
  });
})();
