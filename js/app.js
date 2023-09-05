function getPin() {
  const pin = generatPin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin;
  }
}
function generatPin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  //   display-pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumberFiled = document.getElementById("type-numbers");

    if (isNaN(number)) {
      if (number === "C") {
        typeNumberFiled.value = "";
      }
    } else {
      const previousTypedNumber = typeNumberFiled.value;
      const newTypedNumber = previousTypedNumber + number;
      typeNumberFiled.value = newTypedNumber;
    }
  });

document.getElementById("veryfi").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;
  const typedNumberField = document.getElementById("type-numbers");
  const typeNumber = typedNumberField.value;
  const pinSuccesMassage = document.getElementById("pin-success");
  const pinWorngMassage = document.getElementById("pin-worng");

  if (typeNumber === currentPin) {
    pinSuccesMassage.style.display = "block";
    pinWorngMassage.style.display = "none";
  } else {
    pinWorngMassage.style.display = "block";
    pinSuccesMassage.style.display = "none";
  }
});
