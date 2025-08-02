// Step 1: Declare the function
function checkAnswer() {
  // Step 2: Set the correct answer
  const correctAnswer = "4";

  // Step 3: Get the user's selected answer
  const selected = document.querySelector('input[name="quiz"]:checked');

  // Step 4: Check if the user selected anything
  if (!selected) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selected.value;

  // Step 5: Compare with correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 6: Attach the event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);