const addPlanForm = document.querySelector("#addPlanForm");
const inputPlan = addPlanForm.querySelector("#inputPlan");
const planList = document.querySelector("#planList");

let plans = [];
const PLAN_KEY = "plans";

function savePlan() {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plans));
}

function deletePlan(event) {
    const li = event.target.parentElement;
    li.remove();
    plans = plans.filter((plan) => plan.id !== parseInt(li.id));
    savePlan();
}

function completePlan(event) {
    const li = event.target.parentElement;
    const i = event.target.querySelector("i");
    li.style.background = "#2779b0b3";
    event.target.style.borderColor = "#8cbd47";
    i.style.color = "#8cbd47";

    for (let i = 0; i < plans.length; i++) {
        console.log(plans[i].complete);
        if (plans[i].id === parseInt(li.id)) {
            plans[i].complete = true;
        }
    }
    savePlan();
}

function paintPlan(newPlanObj) {
    const li = document.createElement("li");
    li.id = newPlanObj.id;
    li.classList.add("planLi");

    const span = document.createElement("span");
    span.innerText = newPlanObj.text;

    const completeBtn = document.createElement("button");
    const completeBtnIcon = document.createElement("i");
    completeBtnIcon.setAttribute("class", "fas fa-check");
    completeBtn.id = "completeBtn";
    completeBtn.appendChild(completeBtnIcon);
    completeBtn.addEventListener("click", completePlan);

    const deleteBtn = document.createElement("button");
    const deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.setAttribute("class", "far fa-trash-alt");
    deleteBtn.id = "deleteBtn"
    deleteBtn.appendChild(deleteBtnIcon);
    deleteBtn.addEventListener("click", deletePlan);

    if (newPlanObj.complete === true) {
        li.style.background = "#2779b0b3";
        completeBtn.style.borderColor = "#8cbd47";
        completeBtnIcon.style.color = "#8cbd47";
    }

    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    planList.appendChild(li);
}

function handlePlanSubmit(event) {
    event.preventDefault();
    if (plans.length >= 10) {
        alert("Too Many Plans!");
        return;
    }
    const newPlan = inputPlan.value;
    inputPlan.value = "";
    const newPlanObj = {
        id: Date.now(),
        text: newPlan,
        complete: false,
    };
    plans.push(newPlanObj);
    paintPlan(newPlanObj);
    savePlan();
}

addPlanForm.addEventListener("submit", handlePlanSubmit);

const savedPlans = localStorage.getItem(PLAN_KEY);
if (savedPlans !== null) {
    const parsedPlans = JSON.parse(savedPlans);
    plans = parsedPlans;
    parsedPlans.forEach(paintPlan);
}