// Sélecteurs HTML
const oBurgerCheckbox = document.querySelector("#checkbox-burger");
const oMenuImages = document.querySelectorAll(".img-menu");
const oMenuLiens = document.querySelectorAll(".menu a");

// Fonctions
/**
 * Fonction d'initialisation au chargement de la page
 */
function initialisation() {
  fermerMenu();
}

/**
 * Fonction fermer page lorsque click sur lien
 */
function fermerMenu() {
  oMenuImages.forEach((image) => {
    image.addEventListener("click", function () {
      window.scrollTo({ top: 0 });
      oBurgerCheckbox.checked = false;
    });
  });
  oMenuLiens.forEach((lien) => {
    lien.addEventListener("click", function () {
      oBurgerCheckbox.checked = false;
    });
  });
}

// Exécution du code
initialisation();
