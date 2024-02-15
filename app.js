let count = 0;

const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function handleSelect(event) {
    count += 1;
    const budget = getValue("budget");

    const placeName = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    if (budget - parseInt(price) < 0) {
      alert("Low Budget Earn Moeny");
      return;
    }
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
    totalPrice("total-cost", price);
    event.target.parentNode.parentNode.style.backgroundColor = "gray";
    event.target.setAttribute("disabled", true);
    setInnerText("budget", budget - parseInt(price));
    setInnerText("cart-count", count);
  });
}

function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
  grandTotal("other");
}
function grandTotal(category) {
  console.log(category);
  const convertTotal = getValue("total-cost");
  if (category == "bus") {
    setInnerText("grand-total", convertTotal + 100);
  } else if (category == "train") {
    setInnerText("grand-total", convertTotal - 200);
  } else if (category == "flight") {
    setInnerText("grand-total", convertTotal + 500);
  } else {
    setInnerText("grand-total", convertTotal);
  }
}

function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
