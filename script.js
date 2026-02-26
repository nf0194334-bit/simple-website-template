// ================= DARK MODE =================
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark",
  );
}
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// ================= TYPING EFFECT =================
let text = "Web Developer | Freelancer | Designer";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// ================= COUNTER =================
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  function update() {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  }
  update();
});

// ================= SCROLL ANIMATION =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// ================= BACK TO TOP =================
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
};
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================= FORM VALIDATION =================
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    document.getElementById("error").innerText = "All fields are required!";
    return false;
  }
  if (!email.includes("@")) {
    document.getElementById("error").innerText = "Invalid Email!";
    return false;
  }
  alert("Form Submitted Successfully!");
  return false;
}
