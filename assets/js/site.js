document.addEventListener("DOMContentLoaded", function () {
  var copyButtons = document.querySelectorAll("[data-copy-text]");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-text");
      var status = button.parentElement.nextElementSibling;

      copyText(text).then(function () {
        if (status && status.classList.contains("copy-status")) {
          status.textContent = text + " copied to clipboard.";
        }
      }).catch(function () {
        if (status && status.classList.contains("copy-status")) {
          status.textContent = "Could not copy " + text + ".";
        }
      });
    });
  });
});

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise(function (resolve, reject) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      if (document.execCommand("copy")) {
        resolve();
      } else {
        reject(new Error("Copy command failed."));
      }
    } catch (error) {
      reject(error);
    } finally {
      document.body.removeChild(textarea);
    }
  });
}
