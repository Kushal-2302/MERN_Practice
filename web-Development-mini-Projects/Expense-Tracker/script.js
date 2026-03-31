const descInput = document.getElementById("descInput");
const amountInput = document.getElementById("amountInput");
const typeInput = document.getElementById("typeInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

let transactions = [];

addBtn.addEventListener("click", addTransaction);

function addTransaction() {
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if (desc === "" || isNaN(amount)) return;

  const transaction = { desc, amount, type };
  transactions.push(transaction);

  renderList();
  updateSummary();

  // Clear inputs
  descInput.value = "";
  amountInput.value = "";
}

function renderList() {
  list.innerHTML = "";
  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      <span>${t.desc} - ${t.amount}</span>
      <button onclick="deleteTransaction(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

function updateSummary() {
  let income = 0, expense = 0;
  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });
  const balance = income - expense;

  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  balanceEl.textContent = balance;
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  renderList();
  updateSummary();
}
