document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('quizApp');
  const params = new URLSearchParams(window.location.search);
  const quizKey = params.get('quiz');

  if (quizKey && QUIZZES[quizKey]) {
    renderQuiz(quizKey);
  } else {
    renderSelection();
  }

  function renderSelection() {
    const keys = Object.keys(QUIZZES);
    app.innerHTML = `
      <div class="wrap quiz-select-wrap">
        <span class="eyebrow">Courses</span>
        <h1 class="section-headline">Choose a quiz to start.</h1>
        <div class="quiz-select-grid">
          ${keys.map(k => `
            <a class="quiz-select-card" href="?quiz=${k}">
              <span class="quiz-select-tag">${QUIZZES[k].tag}</span>
              <h3>${QUIZZES[k].label}</h3>
              <p>${QUIZZES[k].description}</p>
              <span class="solve-link">Take quiz <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderQuiz(key) {
    const quiz = { ...QUIZZES[key], questions: shuffleQuizQuestions(QUIZZES[key].questions) };
    app.innerHTML = `
      <div class="wrap quiz-take-wrap">
        <span class="eyebrow">${quiz.tag}</span>
        <h1 class="section-headline">${quiz.label} Quiz</h1>
        <p class="section-sub">${quiz.questions.length} questions. Answer every question, then see your score with a full explanation for each one.</p>
        <form id="quizForm" class="quiz-form">
          ${quiz.questions.map((item, qi) => `
            <fieldset class="quiz-question" data-qindex="${qi}">
              <legend>${qi + 1}. ${item.q}</legend>
              <div class="quiz-options">
                ${item.options.map((opt, oi) => `
                  <label class="quiz-option">
                    <input type="radio" name="q${qi}" value="${oi}" required>
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </fieldset>
          `).join('')}
          <button type="submit" class="btn btn-dark quiz-submit">See my results</button>
        </form>
        <div id="quizResults" class="quiz-results hidden"></div>
      </div>
    `;

    const form = document.getElementById('quizForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const answers = quiz.questions.map((_, qi) => {
        const picked = form.querySelector(`input[name="q${qi}"]:checked`);
        return picked ? parseInt(picked.value, 10) : null;
      });
      showResults(quiz, answers);
    });
  }

  function shuffleQuizQuestions(questions) {
    const shuffledQuestions = questions.map((item) => {
      const options = shuffle([...item.options]);
      const correctAnswer = item.options[item.correctIndex];

      return {
        ...item,
        options,
        correctIndex: options.indexOf(correctAnswer)
      };
    });

    return shuffle(shuffledQuestions);
  }

  function shuffle(items) {
    for (let index = items.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
    }
    return items;
  }

  function showResults(quiz, answers) {
    const total = quiz.questions.length;
    let score = 0;
    answers.forEach((a, i) => { if (a === quiz.questions[i].correctIndex) score++; });
    const percentile = PERCENTILES[score] ?? Math.round((score / total) * 99);

    document.getElementById('quizForm').classList.add('hidden');
    const resultsEl = document.getElementById('quizResults');
    resultsEl.classList.remove('hidden');

    resultsEl.innerHTML = `
      <div class="quiz-score-card">
        <span class="eyebrow">Your results</span>
        <h2 class="section-headline">${score} out of ${total} correct</h2>
        <p class="quiz-percentile">Estimated better than <strong>${percentile}%</strong> of US adults<sup>*</sup></p>
        <p class="quiz-percentile-note">*Illustrative estimate based on general financial literacy research patterns — not a formally normed test score.</p>
        <div class="quiz-results-actions">
          <a href="?quiz=${Object.keys(QUIZZES).find(k => QUIZZES[k] === quiz)}" class="btn btn-ghost">Retake this quiz</a>
          <a href="courses.html" class="btn btn-ghost">Choose another quiz</a>
        </div>
      </div>

      <div class="quiz-breakdown">
        ${quiz.questions.map((item, qi) => {
          const userAnswer = answers[qi];
          const isCorrect = userAnswer === item.correctIndex;
          const statusIcon = isCorrect
            ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7"/></svg>`
            : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg>`;
          return `
            <div class="quiz-review ${isCorrect ? 'is-correct' : 'is-incorrect'}">
              <div class="quiz-review-heading">
                <span class="quiz-review-status" aria-label="${isCorrect ? 'Correct' : 'Incorrect'}">${statusIcon}</span>
                <div>
                  <p class="quiz-review-label">${isCorrect ? 'Correct' : 'Not quite'}</p>
                  <p class="quiz-review-q">${qi + 1}. ${item.q}</p>
                </div>
              </div>
              <ul class="quiz-review-options">
                ${item.options.map((opt, oi) => {
                  let cls = '';
                  if (oi === item.correctIndex) cls = 'correct-answer';
                  else if (oi === userAnswer) cls = 'wrong-answer';
                  const optionIcon = oi === item.correctIndex
                    ? `<span class="quiz-option-icon option-icon-correct" aria-label="Correct answer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7"/></svg></span>`
                    : oi === userAnswer
                      ? `<span class="quiz-option-icon option-icon-wrong" aria-label="Your incorrect answer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg></span>`
                      : '';
                  const label = oi === item.correctIndex
                    ? '<span class="quiz-answer-label">Correct answer</span>'
                    : oi === userAnswer
                      ? '<span class="quiz-answer-label">Your answer</span>'
                      : '';
                  return `<li class="${cls}">${optionIcon}<span>${opt}</span>${label}</li>`;
                }).join('')}
              </ul>
              <p class="quiz-review-explanation">${item.explanation}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
