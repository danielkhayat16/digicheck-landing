// utils.js
const basePath = "/digicheck-landing/";

function goTo(pagePath) {
  window.location.href = basePath + pagePath;
}

document.addEventListener("DOMContentLoaded", function () {
  // Gestion du bouton "close"
  const closeButton = document.getElementById("close-button");
  if (closeButton) {
    closeButton.addEventListener("click", goToDashboard);
  }

  // Gestion du bouton "back"
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", goBackOrHome);
  }
});

// Fonction de navigation générique
function goTo(pagePath) {
  window.location.href = pagePath;
}

// Navigation vers des pages précises
function goToDashboard() {
  goTo("pages/dashboard.html");
}

function goToCreateCheck() {
  goTo("pages/createCheck.html");
}

function goToMyEmittedChecks() {
  goTo("pages/myEmittedCheck.html");
}

function goToFAQ() {
  goTo("pages/faq.html");
}

function goToHome() {
  goTo("index.html");
}

// Fonction pour revenir à la page précédente ou à l'accueil
function goBackOrHome() {
  if (document.referrer && document.referrer !== location.href) {
    window.history.back();
  } else {
    goToHome();
  }
}
