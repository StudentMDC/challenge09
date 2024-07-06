const buttonN = document.getElementById("buttonNotify");
const inputE = document.getElementById("email");
const message = buttonN.nextElementSibling;

inputE.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    const email = inputE.value.trim();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      inputE.classList.add("success");
      inputE.classList.remove("fail");
      message.innerHTML = "";
    } else {
      inputE.classList.remove("success");
      inputE.classList.add("fail");
      message.innerHTML = "Please provide a valid email address";
    }
  }
});
