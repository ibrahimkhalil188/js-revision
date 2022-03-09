const addToList = () => {
    const input = document.getElementById("item-input")
    const name = input.value
    const ul = document.getElementById("item-list")
    const li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
    addTocart(name)

}

const cart = () => {
    const shopingCart = localStorage.getItem("cart")
    let cartItem;
    if (shopingCart) {
        cartItem = JSON.parse(cart)
    } else {
        cartItem = {}
    }
    return cartItem
}

const addTocart = name => {
    const add = cart()
    add[name] = 1
    const product = JSON.stringify(add)
    localStorage.setItem("cart", product)
}
