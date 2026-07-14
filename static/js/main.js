/* Toggle password visibility */
document.querySelectorAll(".toggle-password").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("data-target");
        var input = document.getElementById(targetId);
        if (!input) return;
        if (input.type === "password") {
            input.type = "text";
            btn.textContent = "🙈";
        } else {
            input.type = "password";
            btn.textContent = "👁";
        }
    });
});

/* Password strength indicator */
var passwordInput = document.getElementById("password");
var strengthBar = document.getElementById("password-strength");

if (passwordInput && strengthBar) {
    passwordInput.addEventListener("input", function () {
        var val = passwordInput.value;
        var score = 0;

        if (val.length >= 8) score++;
        if (val.length >= 12) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        var pct = (score / 5) * 100;
        var color = score <= 1 ? "#e05252" : score <= 2 ? "#f5a623" : score <= 3 ? "#f5e642" : "#3ecf8e";

        strengthBar.style.setProperty("--strength", pct + "%");
        strengthBar.style.setProperty("--strength-color", color);
    });
}

/* Auto-dismiss alerts after 5 seconds */
document.querySelectorAll(".alert").forEach(function (alert) {
    setTimeout(function () {
        alert.style.transition = "opacity 0.4s ease";
        alert.style.opacity = "0";
        setTimeout(function () { alert.remove(); }, 400);
    }, 5000);
});
