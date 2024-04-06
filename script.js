function updateStyles() {
  const select = document.querySelector("#slt").value;
  const txt = document.querySelector("#txt");
  const ftColor = document.querySelector("#ft-color").value;
  const bcColor = document.querySelector("#bc-color").value;

  txt.style.fontSize = select;
  txt.style.color = ftColor;
  txt.style.backgroundColor = bcColor;
}

function clearText() {
  document.getElementById("txt").value = "";
}

function saveText() {
  var text = document.getElementById("txt").value;
  text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
  var blob = new Blob([text], { type: "text/plain" });
  var anchor = document.createElement("a");
  anchor.download = "my-Text.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}