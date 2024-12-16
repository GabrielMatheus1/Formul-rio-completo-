var btn = document.getElementById('btn');

btn.addEventListener('click', enviarForm());

function enviarForm() {

var form = document.getElementById('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(response => response.json())
    .then(data => {
      alert("enviado!");
      e.target.reset();
    });
});

}