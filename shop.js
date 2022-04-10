if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('store-item-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// -----------------------------------------------------------------------------------------------remove items from the cart

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//------------------------------------------------------------------------------------------------- change quantity of items
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// -------------------------------------------------------------------------------------------------------add to cart button
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('store-title')[0].innerText
    var price = shopItem.getElementsByClassName('store-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('store-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


// ------------------------------------------------------------------------------------------get variables and all to the cart

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('my-cart-row')
    var cartItems = document.getElementsByClassName('my-cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    




    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


//------------------------------------------------------------------------------------------------------------------- calculating total
var total = 0

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('my-cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('my-cart-row')
    
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('my-cart-total-price')[0].innerText = '$' + total
    alert(total)
}

function totfunct(){
    alert('your total is'+' '+ total);
}
// ------------------------------------------------------------change font size--------------------------------------------------------//   

function myFunction() {
    document.getElementById("demo").style.fontSize = "x-large";
}