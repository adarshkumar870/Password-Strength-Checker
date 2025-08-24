const password = document.getElementById("password");
    const bar = document.getElementById("bar");
    const text = document.getElementById("strength-text");
    const tips = document.getElementById("tips");

    password.addEventListener("input", () => {
      const val = password.value;
      let score = 0;
      let suggestions = [];

      if (val.length >= 8) score++;
      else suggestions.push("Use at least 8 characters.");

      if (/[A-Z]/.test(val)) score++;
      else suggestions.push("Add an uppercase letter.");

      if (/[0-9]/.test(val)) score++;
      else suggestions.push("Add a number.");

      if (/[^A-Za-z0-9]/.test(val)) score++;
      else suggestions.push("Add a special character (!@#$%).");

      let strength = ["Weak", "Moderate", "Strong", "Very Strong"];
      let colors = ["red", "orange", "blue", "green"];

      bar.style.width = (score * 25) + "%";
      bar.style.background = colors[score-1] || "red";
      text.textContent = "Strength: " + (strength[score-1] || "Weak");
      tips.innerHTML = suggestions.map(s => "• " + s).join("<br>");
    });