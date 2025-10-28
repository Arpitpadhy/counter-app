let count = 0;

const countDisplay = document.getElementById("count-display");
const errorMessage = document.getElementById("error-message");
const clearBtn = document.getElementById("clear");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  updateDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
  if (count === 0) {
    errorMessage.textContent = "Error: Count is already 0";
  } else {
    count--;
    updateDisplay();
  }
});

clearBtn.addEventListener("click", () => {
  if (count === 0) {
    clearBtn.style.display = "none";
  } else {
    count = 0;
    updateDisplay();
  }
});

function updateDisplay() {
  countDisplay.textContent = count;
  errorMessage.textContent = "";
  clearBtn.style.display = "inline-block";
}
