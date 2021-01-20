const name = prompt("What's your name?", "");

if (
  name === "Mrs. Stoldt" ||
  name === "Ms. Stoldt" ||
  name === "Elena Stoldt" ||
  name === "Elena Hartmann" ||
  name === "Mrs. Hartmann" ||
  name == "Ms. Hartmann" ||
  name === "RT" ||
  name === "SR"
) {
  alert("Access Granted! ✔✔✔");
} else {
  alert("Access Denied! ❌❌❌");
  window.location.href = "../HTML/access_denied.html";
}
