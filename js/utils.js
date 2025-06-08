document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      if (document.referrer && document.referrer !== window.location.href) {
        history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("close-button");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});

function goTo(page) {
    window.location.href = page;
}

function goToDashboard() {
    goTo('dashboard.html');
}

function goToCreateCheck() {
    goTo('createCheck.html');
}

function goToMyEmittedChecks() {
    goTo('myEmittedCheck.html');
}

function goToFAQ() {
    goTo('faq.html');
}

function goToHome() {
    goTo('index.html');
}
