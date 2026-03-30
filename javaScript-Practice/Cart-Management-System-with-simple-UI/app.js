let cart = [];

//Render cart items
function renderCart(){
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        ${item.name} - ₹${item.price} x ${item.quantity}
        <button onclick="decreaseQuantity(${index})">-</button>
        <button onclick="removeItem(${index})">Remove</button>
        <button onclick="increaseQuantity(${index})">+</button>
        `
        cartDiv.appendChild(div);
    });

    // Calculate total using reduce
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0);
    document.getElementById("total").textContent = total;
}

// Add item
function addItem() {
  const nameInput = document.getElementById("itemName");
  const priceInput = document.getElementById("itemPrice");
  const quantityInput = document.getElementById("itemQuantity");

  const name = nameInput.value;
  const price = parseFloat(priceInput.value);
  const quantity = parseInt(quantityInput.value);

  if (name && price > 0 && quantity > 0) {
    cart.push({ name, price, quantity });
    renderCart();

    // ✅ Clear the input fields after adding
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = 1; // reset to default quantity
  }
}

// Remove item
function removeItem(index){
    cart.splice(index, 1); // remove item at index
    renderCart();
}

// Increase quantity
function increaseQuantity(index){
    cart[index].quantity++;
    renderCart();
}

// Decrease quantity
function decreaseQuantity(index){
    if(cart[index].quantity > 1){
        cart[index].quantity--;
    }else{
        removeItem(index);
    }
    renderCart();
}