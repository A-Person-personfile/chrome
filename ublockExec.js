/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 49) {
    let code = prompt("Eval:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});
