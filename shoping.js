const addToList = () => {
    const input = document.getElementById("item-input")
    const ul = document.getElementById("item-list")
    const li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
    curt()

}

const curt = () => {
    const shopingCurt = localStorage.getItem("Curt")
    let cartItem;
    if (shopingCurt) {
        localStorage.setItem(cartItem)
    } else {
        cartItem = {}
    }
}
