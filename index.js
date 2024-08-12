const correctAnswers = ["A", "B", "B", "C", "C", "C", "B", "A", "C", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.option1.value,
    form.option2.value,
    form.option3.value,
    form.option4.value,
    form.option5.value,
    form.option6.value,
    form.option7.value,
    form.option8.value,
    form.option9.value,
    form.option10.value,
  ];

  // Checking the Answers
  userAnswers.forEach((answer, index) => {
    const correctAnswer = correctAnswers[index];
    const label = form.querySelector(
      `input[name="option${index + 1}"][value="${correctAnswer}"]`
    ).nextElementSibling;

    if (answer === correctAnswer) {
      score += 10;
    } else {
      // If the answer is wrong, underline the correct answer with a red border
      label.classList.add("correct-answer");
    }
  });

  // show result on page
  scrollTo(0, 0);

  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector(".show-score").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
});
