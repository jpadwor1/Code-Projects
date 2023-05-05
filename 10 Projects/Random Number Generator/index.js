const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");
const generateBtn = document.getElementById("generate-btn");
const display = document.getElementById("result-container");
const decimalCheckbox = document.querySelector("#decimal");
const negativeCheckbox = document.querySelector("#negative");

const negative = function generateNegative() {
  if (negativeCheckbox.checked === true) {
    if (Math.random() < 0.5) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
};

function generateRandomWhole(minBound, maxBound) {
  return Math.floor(Math.random() * (maxBound - minBound + 1)) * negative() + parseInt(minBound);
}

function generateRandomDecimal(minBound, maxBound) {
    const randomDecimal = Math.random() * (maxBound - minBound) * negative()+ parseFloat(minBound);
    const roundedDecimal = randomDecimal.toFixed(2);
    return parseFloat(roundedDecimal);
}

generateBtn.addEventListener("click", () => {
  const minBound = minValue.value;
  const maxBound = maxValue.value;

  if (decimalCheckbox.checked === false) {
    display.innerHTML = generateRandomWhole(minBound, maxBound);
  } else {
    display.innerHTML = generateRandomDecimal(minBound, maxBound);
  }
});
