/**
 * Created by Edward_J_Apostol on 2017-01-29.
 */

export default class ShoppingCart{

    constructor(){
        console.log("creating shopping cart");
        if(Storage){
            // you can create a shoppingCart!
            this.initShoppingCart();
        } else
        {
            console.log("Error! SessionStorage not supported in your browser!");
        }
    }
}
    initShoppingCart(){
        // create the sessionStorage object that will be used
        // to store the items.
        console.log("finished creating shopping cart");
    }

    function() addItemToCart (sku){
        let numMatches = 0;
        for(let i = 0; 0<sessionStorage.length, i++){
            if(sessionStorage[i] == sku){
               let newVal = sessionStorage.getItem(sku);
                    sessionStorage.setItem(sku, parseInt(newVal)+1);
                    numMatches = 1;
            }
        }
    };

    if (numMatches == 0){
        sessionStorageItem(sku, 1);
    } 
        
            addItemToCart(sku);
                console.log('addingItem to Cart');
        
    }

    removeItemFromCart(sku){

    }

    updateQuantityofItemInCart(sku,qty){

    }

    clearCart(){
        // clear the entire cart
    }



