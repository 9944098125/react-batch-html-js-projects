window.addEventListener("load", () => {
	allTodo = JSON.parse(localStorage.getItem("allTodo")) || [];

	const todoForm = document.getElementById("create-form");

	todoForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const newTodo = {
			content: e.target.elements.content.value,
			done: false,
			createAt: new Date(),
		};
		// console.log(newTodo);
		allTodo.push(newTodo);
		localStorage.setItem("allTodo", JSON.stringify(allTodo));
		e.target.reset();
		DisplayTodo();
	});
	DisplayTodo();
});

function DisplayTodo() {
	const todoList = document.getElementById("list");
	todoList.innerHTML = "";

	allTodo.forEach((eachTodo) => {
		// console.log(eachTodo);
		const todoItem = document.createElement("div");
		todoItem.classList.add("todo-item");
		const label = document.createElement("label");
		const input = document.createElement("input");
		const span = document.createElement("span");
		const content = document.createElement("div");
		const actions = document.createElement("div");
		const editBtn = document.createElement("button");
		const deleteBtn = document.createElement("button");

		input.type = "checkbox";
		input.checked = eachTodo.done;
		span.classList.add("checkbox-replacement");
		content.classList.add("todo-content");
		actions.classList.add("actions");
		editBtn.classList.add("edit");
		deleteBtn.classList.add("delete");

		// console.log(eachTodo.content);
		content.innerHTML = `<input type="text" class="content-input" value="${eachTodo.content}" readonly />`;
		editBtn.innerHTML = "Edit";
		deleteBtn.innerHTML = "Delete";

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(editBtn);
		actions.appendChild(deleteBtn);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (eachTodo.done) {
			todoItem.classList.add("done");
		}

		input.addEventListener("change", (e) => {
			// console.log(e);
			eachTodo.done = e.target.checked;
			localStorage.setItem("allTodo", JSON.stringify(allTodo));

			if (eachTodo.done) {
				todoItem.classList.add("done");
			} else {
				todoItem.classList.remove("done");
			}
			DisplayTodo();
		});

		editBtn.addEventListener("click", () => {
			const mainInput = content.querySelector("input");
			mainInput.removeAttribute("readonly");
			mainInput.focus();
			mainInput.addEventListener("blur", (e) => {
				mainInput.setAttribute("readonly", true);
				eachTodo.content = e.target.value;
				localStorage.setItem("allTodo", JSON.stringify(allTodo));
				DisplayTodo();
			});
		});

		deleteBtn.addEventListener("click", (e) => {
			allTodo = allTodo.filter((todo) => todo !== eachTodo);
			localStorage.setItem("allTodo", JSON.stringify(allTodo));
			DisplayTodo();
		});
	});
}
