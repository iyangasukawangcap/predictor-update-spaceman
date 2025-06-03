function generateMultiplier() {
  const multiplier = Math.random() * (5000 - 1.01) + 1.01;
  const result = multiplier.toFixed(3);
  document.getElementById("result").innerText = `Multiplier: ${result}×`;

  const sound = document.getElementById("sound");
  sound.currentTime = 0;
  sound.play();
}

// Update otomatis setiap 2.5 detik
setInterval(generateMultiplier, 2500);
generateMultiplier();
