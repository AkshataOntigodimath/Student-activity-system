// Select elements
const passwordInput = document.querySelector(".password-box input");
const eyeIcon = document.querySelector(".password-box i");
const roleSelect = document.querySelector("select");
const form = document.querySelector("form");

// Show/Hide Password
eyeIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});

// Login Redirect
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = roleSelect.value;

    if (role === "Student") {
        window.location.href = "student/dashboard.html";
    }
    else if (role === "Teacher") {
        window.location.href = "teacher/dashboard.html";
    }
    else if (role === "Parent") {
        window.location.href = "parent/dashboard.html";
    }
    else if (role === "Admin") {
        window.location.href = "admin/dashboard.html";
    }
});