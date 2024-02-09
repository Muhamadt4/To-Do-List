let inputval = document.getElementById("todo");
let listelm = document.getElementById("list-cont");

function addtask() {
  if (inputval.value === "") {
    alert("please enter text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputval.value;
    listelm.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputval.value = "";
}
listelm.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
