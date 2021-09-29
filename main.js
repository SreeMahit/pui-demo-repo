function toggleItem(item) {
  if (item.checked) {
    item.parentNode.classList.add("complete");
  } else {
    item.parentNode.classList.remove("complete");
  }
}

function deleteListItem(item) {
  const listParent = item.parentNode;
  listParent.parentNode.removeChild(listParent);
}

function addListItem() {
  const list = document.getElementById("todolist");
  const itemInput = document.getElementById("todoinput");

  const newItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onclick", "toggleItem(this)");

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(itemInput.value));

  const del = document.createElement("button");
  del.classList.add("delete");
  del.setAttribute("onclick", "deleteListItem(this)");
  del.appendChild(document.createTextNode("X"));

  newItem.appendChild(checkbox);
  newItem.appendChild(label);
  newItem.appendChild(del);
  list.appendChild(newItem);
}
