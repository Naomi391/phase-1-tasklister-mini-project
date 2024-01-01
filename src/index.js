document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const theDescription = document.getElementById("new-task-description");
    const taskDescriptionInput = theDescription.value;

    const newActivity = document.createElement("li");
    newActivity.textContent = taskDescriptionInput;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", function () {
      tasksList.removeChild(newActivity);
    });

    newActivity.appendChild(deleteButton);

    tasksList.appendChild(newActivity);

    theDescription.value = "";
  });
});
