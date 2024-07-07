const showDialog = () => {
  let dialog = document.getElementById("dialog");

  dialog.classList.remove("hidden");
  dialog.classList.add("flex");

  setTimeout(() => {
    dialog.classList.add("opacity-100");
  },20)
}
 
const hideDialog = () => {
  let dialog = document.getElementById("dialog");

  dialog.classList.add("opacity-100");
  dialog.classList.remove("hidden");
  dialog.classList.add("flex");

  setTimeout(() => {
   
  }, 20);
};