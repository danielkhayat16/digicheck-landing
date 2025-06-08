const isLocal = window.location.protocol === "file:";
const basePath = isLocal ? "" : "/digicheck-landing/";

function goTo(pagePath) {
  const fullPath = basePath + pagePath;
  window.location.href = fullPath;
}

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("close-button");
  if (closeButton) {
    closeButton.addEventListener("click", goToDashboard);
  }

  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", goBackOrHome);
  }
});

function goToDashboard() {
  goTo("dashboard.html");
}

function goToCreateCheck() {
  goTo("createCheck.html");
}

function goToMyEmittedChecks() {
  goTo("myEmittedCheck.html");
}

function goToFAQ() {
  goTo("faq.html");
}

function goToHome() {
  window.location.href = isLocal
    ? "index.html"
    : "/digicheck-landing/index.html";
}

function goBackOrHome() {
  if (document.referrer && document.referrer !== location.href) {
    window.history.back();
  } else {
    goToHome();
  }
}
