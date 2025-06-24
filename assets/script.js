
document.addEventListener("DOMContentLoaded", function () {
  const scriptURL='https://script.google.com/macros/s/AKfycbzWXLY6_MqquSguId0jbLWPeba0QKewa9t7OsodjHQcjnCO6xmoMigoYcmdxED6EAJt/exec';
  const form = document.forms['report-form'];

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const desc = document.getElementById("desc").value.trim();

    if (!name || !email || !type || !desc) {
      alert("❗ Please fill in all the fields before submitting.");
      return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("✅ Report submitted successfully! Thank you.");
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert("❌ Something went wrong. Please try again.");
      });
  });

  // Dark mode toggle
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
