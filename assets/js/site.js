document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-copy-text]").forEach(function (button) {
    button.hidden = false;
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-text");
      var status = document.getElementById(button.getAttribute("aria-describedby"));
      copyText(text).then(function () {
        if (status) status.textContent = text + " copied to clipboard.";
      }).catch(function () {
        if (status) status.textContent = "Could not copy " + text + ". You can use the email link instead.";
      });
    });
  });

  document.querySelectorAll("[data-video-src]").forEach(function (link) {
    // Keep a normal video link when JavaScript is unavailable.
    var button = document.createElement("button");
    button.type = "button";
    button.className = link.className;
    button.innerHTML = link.innerHTML;
    button.setAttribute("aria-label", link.getAttribute("aria-label"));
    button.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src = link.getAttribute("data-video-src");
      frame.title = link.getAttribute("data-video-title");
      frame.allow = "encrypted-media; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      button.replaceWith(frame);
      frame.focus();
    });
    link.replaceWith(button);
  });

  var filterBar = document.querySelector(".pub-filter");
  var list = document.querySelector(".pub-list");
  if (!filterBar || !list) return;

  var chips = filterBar.querySelectorAll("[data-filter]");
  var entries = list.querySelectorAll(".pub-entry");
  var yearHeaders = list.querySelectorAll(".pub-year");
  var status = document.getElementById("publication-filter-status");

  list.querySelectorAll("[data-tag]").forEach(function (tag) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = tag.className;
    button.textContent = tag.textContent;
    button.setAttribute("data-tag", tag.getAttribute("data-tag"));
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "Filter by " + tag.textContent);
    tag.replaceWith(button);
  });
  var tags = list.querySelectorAll("[data-tag]");

  function applyFilter(filter) {
    var count = 0;
    var selectedLabel = "All";
    entries.forEach(function (entry) {
      var entryTags = entry.getAttribute("data-tags").split(/\s+/);
      var visible = filter === "all" || entryTags.indexOf(filter) !== -1;
      entry.hidden = !visible;
      if (visible) count += 1;
    });
    yearHeaders.forEach(function (header) {
      var next = header.nextElementSibling;
      var visible = false;
      while (next && !next.classList.contains("pub-year")) {
        if (next.classList.contains("pub-entry") && !next.hidden) visible = true;
        next = next.nextElementSibling;
      }
      header.hidden = !visible;
    });
    chips.forEach(function (chip) {
      var selected = chip.getAttribute("data-filter") === filter;
      chip.classList.toggle("is-active", selected);
      chip.setAttribute("aria-pressed", String(selected));
      if (selected) selectedLabel = chip.textContent;
    });
    tags.forEach(function (tag) {
      tag.setAttribute("aria-pressed", String(tag.getAttribute("data-tag") === filter));
    });
    if (status) status.textContent = count + (count === 1 ? " publication" : " publications") + " shown. " + selectedLabel + ".";
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () { applyFilter(chip.getAttribute("data-filter")); });
  });
  tags.forEach(function (tag) {
    tag.addEventListener("click", function () { applyFilter(tag.getAttribute("data-tag")); });
  });
  filterBar.hidden = false;
});

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise(function (resolve, reject) {
    var previousFocus = document.activeElement;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      if (document.execCommand("copy")) resolve();
      else reject(new Error("Copy command failed."));
    } catch (error) {
      reject(error);
    } finally {
      document.body.removeChild(textarea);
      if (previousFocus) previousFocus.focus();
    }
  });
}
