const showDialog1 = () => {
  let dialog1 = document.getElementById("dialog1");

  dialog1.classList.remove("hidden");
  dialog1.classList.add("flex");

  setTimeout(() => {
    dialog1.classList.add("opacity-100");
  },20)
}
 
const hideDialog1 = () => {
  let dialog1 = document.getElementById("dialog1");

  dialog1.classList.add("opacity-0");
  

  setTimeout(() => {
  dialog1.classList.add("hidden");
  dialog1.classList.remove("flex"); 
  }, 500);
};