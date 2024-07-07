const showDialog1 = () => {
  let dialog1 = document.getElementById("dialog");

  dialog1.classList.remove("hidden");
  dialog1.classList.add("flex");

  setTimeout(() => {
    dialog1.classList.add("opacity-100");
  },20)
}
 
const hideDialog = () => {
  let dialog1 = document.getElementById("dialog");

  dialog1.classList.add("opacity-0");
  

  setTimeout(() => {
  dialog.classList.add("hidden");
  dialog.classList.remove("flex"); 
  }, 500);
};