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
    ? "../index.html"
    : "/digicheck-landing/index.html";
}

function goBackOrHome() {
  if (document.referrer && document.referrer !== location.href) {
    window.history.back();
  } else {
    goToHome();
  }
}

function createCheck() {
  const beneficiaryName = document
    .getElementById("beneficiary-name")
    .value.trim();
  const beneficiaryIban = document
    .getElementById("beneficiary-iban")
    .value.trim();
  const label = document.getElementById("label").value.trim();
  const issueDate = document.getElementById("issue-date").value;
  const amountRaw = document.getElementById("amount").value.trim();
  const guarantee = document.getElementById("guarantee-toggle").checked;

  const amount = parseFloat(amountRaw.replace(/,/g, ""));

  if (!beneficiaryName) {
    alert("Merci de saisir le nom du bénéficiaire.");
    return;
  }
  if (!beneficiaryIban) {
    alert("Merci de saisir l'IBAN du bénéficiaire.");
    return;
  }
  if (!issueDate) {
    alert("Merci de saisir la date d'émission.");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Merci de saisir un montant valide.");
    return;
  }

  const checkData = {
    beneficiaryName,
    beneficiaryIban,
    label,
    issueDate,
    amount,
    guarantee,
  };

  // Stocker les données du chèque dans sessionStorage
  sessionStorage.setItem("checkData", JSON.stringify(checkData));

  // Rediriger vers la page de signature
  window.location.href = "signCheck.html";
}
