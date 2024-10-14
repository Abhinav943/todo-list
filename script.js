const taskbutton = document.querySelector("#task-button");
const main = document.querySelector("main");

const genratetask = () => {
  const para = document.createElement("textarea");
  para.placeholder = "Enter your task";
  para.id = "input-text";
  para.classList.add("task-input");

  const infoSection = document.createElement("div");
  infoSection.classList.add("info-section");

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date:";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.classList.add("task-date");

  const goalLabel = document.createElement("label");
  goalLabel.textContent = "Goal:";
  const goalInput = document.createElement("input");
  goalInput.type = "text";
  goalInput.placeholder = "Enter your goal";
  goalInput.classList.add("task-goal");

  const detailLabel = document.createElement("label");
  detailLabel.textContent = "Detail:";
  const detailInput = document.createElement("textarea");
  detailInput.placeholder = "Enter details";
  detailInput.classList.add("task-detail");

  infoSection.appendChild(dateLabel);
  infoSection.appendChild(dateInput);
  infoSection.appendChild(goalLabel);
  infoSection.appendChild(goalInput);
  infoSection.appendChild(detailLabel);
  infoSection.appendChild(detailInput);

  main.insertBefore(para, taskbutton);
  main.insertBefore(infoSection, taskbutton);
};

taskbutton.addEventListener("click", () => {
  genratetask();
});
