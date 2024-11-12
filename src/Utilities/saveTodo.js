// get todo list from local storage
const getTodoFromLS = () => {
  const fullList = localStorage.getItem("todoList");

  if (fullList) {
    const list = JSON.parse(fullList);
    return list;
  } else {
    return [];
  }
};

// save new todo into local storage
const saveTodo = (todo) => {
  const list = getTodoFromLS();

  if (list.includes(todo)) {
    return alert("added already");
  } else {
    list.push(todo);
    localStorage.setItem("todoList", JSON.stringify(list));
  }
};

// remove todo item from ls

export { saveTodo, getTodoFromLS };
