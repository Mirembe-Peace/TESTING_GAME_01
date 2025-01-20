const words = [
    "hello", "world", "javascript", "coding", "typing", 
    "challenge", "game", "react", "html", "css", "developer"
  ];
  let currentWord = "";
  let score = 0;
  let time = 30;
  let timer;
  
  // DOM Elements
  const wordDisplay = document.getElementById("word");
  const input = document.getElementById("input");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const startBtn = document.getElementById("start-btn");
  
  // Start the game
  startBtn.addEventListener("click", startGame);
  
  function startGame() {
    score = 0;
    time = 30;
    input.value = "";
    input.disabled = false;
    input.focus();
    startBtn.disabled = true;
  
    // Update UI
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
  
    // Start timers and display the first word
    nextWord();
    timer = setInterval(updateTime, 1000);
  }
  
  // Show a new random word
  function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
  }
  
  // Update the timer
  function updateTime() {
    time--;
    timeDisplay.textContent = time;
  
    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }
  
  // Handle user input
  input.addEventListener("input", () => {
    if (input.value.trim() === currentWord) {
      score++;
      scoreDisplay.textContent = score;
      input.value = "";
      nextWord();
    }
  });
  
  // End the game
  function endGame() {
    input.disabled = true;
    startBtn.disabled = false;
    wordDisplay.textContent = `Game Over! Your score: ${score}`;
  }
  