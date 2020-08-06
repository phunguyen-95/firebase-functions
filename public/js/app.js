const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");
const button = document.querySelector(".call");

requestLink.addEventListener("click", () => {
  requestModal.classList.add("open");
});

requestModal.addEventListener("click", e => {
  if (e.target.classList.contains("new-request")) {
    requestModal.classList.remove("open");
  }
});

button.addEventListener("click", () => {
  const sayHello = firebase.functions().httpsCallable("sayHello");
  sayHello({ name: "phu" }).then(result => {
    console.log(result.data);
  });
});
