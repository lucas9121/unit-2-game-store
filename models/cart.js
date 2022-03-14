const Cart = (oldCart) => {
    // console.log(oldCart.id)
    // console.log(oldCart.price)
    // console.log(oldCart)
    let items = oldCart
    let totalPrice = 0
    let totalQty = 0
    // const add = (item, id) => {
    //     let storedItem = items[id]
    //     if(storedItem !== items.findOne({id: item[id]})){
    //         storedItem = {_id: item.id, name: item.name, description: item.description, qty: 1, price: item.price, img: item.img}
    //     }
    // }
    let newItem = storedItem.find(i => i === item)
    if(!newItem){
        console.log('nothing here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        storedItem.push(item)
        totalQty++
        // storedItem[item].qty = totalQty
        totalPrice = 0
        for(let i = 0; i < storedItem.length; i++){
            totalPrice += storedItem[i].price * totalQty
        }
        console.log(`total price is ${totalPrice}`)
    } else {
        console.log('game here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        storedItem[item].qty++
        storedItem[item].price = item.price * item.qty
        for(let i = 0; i < storedItem.length; i++){
            totalPrice += storedItem[i].price * storedItem[i].qty
        }
        console.log(`total price is ${totalPrice}`)
        console.log(storedItem)
    }
    console.log(`stored item is ${storedItem[item.qty]}`)
    console.log(`stored item quantity is ${storedItem[item].qty}`)
    return storedItem
}

module.exports = Cart