//your JS code here. If required.
// Function to set cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
}

// Function to get cookie
function getCookie(name) {
  const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return keyValue ? keyValue[2] : null;
}

// Function to handle form submission
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Set cookies for font size and color
  setCookie("fontsize", fontSize, 30); // Cookie expires in 30 days
  setCookie("fontcolor", fontColor, 30); // Cookie expires in 30 days

  // Apply font size and color to the page
  document.body.style.fontSize = `${fontSize}px`;
  document.body.style.color = fontColor;
});

// Function to apply saved preferences from cookies on page load
window.addEventListener("load", function() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // Apply saved preferences if they exist
  if (savedFontSize) {
    document.body.style.fontSize = `${savedFontSize}px`;
    document.getElementById("fontsize").value = savedFontSize;
  }
  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
});
