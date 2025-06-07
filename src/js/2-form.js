const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const formData = {
  email: "",
  message: "",
};

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  formData.email = savedData.email ?? "";
  formData.message = savedData.message ?? "";
  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

form.addEventListener("input", () => {
  formData.email = emailInput.value.trim();
  formData.message = messageTextarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();

  formData.email = "";
  formData.message = "";
});

