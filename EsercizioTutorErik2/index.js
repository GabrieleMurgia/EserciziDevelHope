

/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
    {id: 324234, category:0, quantity:1, title: 'Margherita', description: "Pomodoro, mozzarella e basilico", ingredients: ['pomodoro','mozzarella','basilico'], price: 6.5},
    {id: 098394, category:0, quantity:1, title: 'Calzone Classico', description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",ingredients: ['pomodoro','mozzarella','prosciutto cotto'], price: 7.0},
    {id: 432432, category:4, quantity:1, title: 'Coca Cola Zero (33CL)', description: "", price: 3.0},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Pomodoro, mozzarella e salamino piccante", ingredients: ['pomodoro','mozzarella','salamino'], price: 7.5},
        {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Mozzarella, salsiccia, patate al forno", ingredients: ['mozzarella','salsiccia','patate al forno'], price: 7.5},
    {id: 333445, category:4, quantity:1, title: 'Acqua Naturale (1L)', description: "", price: 2},
    {id: 656765, category:3, quantity:3, title: 'Cheesecake Cioccolato', description: "Dolce a base di formaggio fresco e topping al cioccolato", price: 5},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
    {id:0, name: "pizze"},
    {id:1, name: "panini"},
    {id:2, name: "sushi"},
    {id:3, name: "dessert"},
    {id:4, name: "bevande"},
]; 

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/

 const getTotalAmount=()=>{
    let sum=0;
    productsInCart.forEach(product => sum += product.price * product.quantity);
    return sum;
}
console.log(getTotalAmount()); 

/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
    */
    const getCategoryCode = (categoryName)=>{
   return categories.find(category => category.name === categoryName)?.id;
   }
   console.log(getCategoryCode("panini"));
   console.log(getCategoryCode("gennaro")); 

/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
      const getCategoryCount = (categoryName)=>{
        return productsInCart.filter(product => product.category === getCategoryCode(categoryName)).length;
     }
     console.log(getCategoryCount("pizze")) 

/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/

/* const removeFromCart = (idProduct)=>{
    let objWithId = productsInCart.find(product => product.id === idProduct);
    let index = productsInCart.findIndex(obj => obj.id === idProduct);
    if(objWithId.quantity>=1){
       productsInCart[index].quantity -= 1;
       if(objWithId.quantity === 0){
        productsInCart.splice(index,1)
       }
    }
    console.log(productsInCart)
   }
   removeFromCart(324234);

 */
/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/


  /*  const printCart = () => {
    for(i=0;i<categories.length;i++){
        console.log(`***${categories[i].name.toUpperCase()}***`)
        productsInCart.filter(order => order.category === i).map(obj=>{console.log(`${obj.quantity} x ${obj.title}(${obj.description}) | ${obj.price}€`)})}
        console.log("***TOTALE***")
        console.log(getTotalAmount()+"€")}
        printCart();  */

        const printCart = () => {
            categories.forEach((category,i)=>{ 
                console.log(`***${category.name.toUpperCase()}***`)
                productsInCart.filter(order => order.category === i).map(obj=>{console.log(`${obj.quantity} x ${obj.title}(${obj.description}) | ${obj.price}€`.replace("() ",""))})})
                console.log("***TOTALE***")
                console.log(getTotalAmount()+"€")}
                printCart(); 
      
/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------
s
*/

 const getPizzeBianche = () => {
    return productsInCart.filter(product => !product.ingredients?.includes("pomodoro") && product.category === 0)
 }
 console.log(getPizzeBianche()) 