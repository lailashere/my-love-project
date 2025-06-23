const output = document.getElementById("output");
const lines = [
  "Connecting to remote server...",
  "Bypassing firewall...",
  "Access granted!",
  "Injecting payload...",
  "Uploading surprise...",
  "Done.",
  "Redirecting to message..."
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    output.textContent += "\n" + lines[i];
    i++;
    setTimeout(typeLine, 1000);
  } else {
    setTimeout(() => {
      window.location.href = "message.html";
    }, 1500);
  }
}

setTimeout(typeLine, 1000);
