function generateMultiplier() {
  const multiplier = Math.random() * (5000 - 1) + 1; // 1.000 to 5000.000
  document.getElementById("result").innerText = `Multiplier: ${multiplier.toFixed(3)}×`;
}

// Update otomatis setiap 2 detik
setInterval(generateMultiplier, 2000);

// Tampilkan saat halaman dibuka
generateMultiplier();
