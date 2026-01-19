let title = document.getElementById("title")
let amount = document.getElementById("amount")
let addBtn = document.getElementById("add")
let list = document.getElementById("list")
let totalEl = document.getElementById("total")

let expenses = JSON.parse(localStorage.getItem("expenses")) || []

function showExpenses() {
  list.innerHTML = ""
  let total = 0

  expenses.forEach((e, i) => {
    total += e.amount

    let li = document.createElement("li")
    li.textContent = e.title + " - " + e.amount

    let del = document.createElement("button")
    del.textContent = "X"
    del.onclick = () => {
      expenses.splice(i, 1)
      save()
    }

    li.appendChild(del)
    list.appendChild(li)
  });

  totalEl.textContent = total
}

function save() {
  localStorage.setItem("expenses", JSON.stringify(expenses))
  showExpenses()
}

addBtn.onclick = () => {
  if (title.value === "" || amount.value === "") return

  expenses.push({
    title: title.value,
    amount: Number(amount.value)
  })

  title.value = ""
  amount.value = ""

  save()
}

showExpenses()