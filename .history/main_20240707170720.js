const showDialog1 = () => {
  let dialog1 = document.getElementById("dialog");

  dialog1.classList.remove("hidden");
  dialog.classList.add("flex");

  setTimeout(() => {
    dialog.classList.add("opacity-100");
  },20)
}
 
const hideDialog = () => {
  let dialog = document.getElementById("dialog");

  dialog.classList.add("opacity-0");
  

  setTimeout(() => {
  dialog.classList.add("hidden");
  dialog.classList.remove("flex"); 
  }, 500);
};