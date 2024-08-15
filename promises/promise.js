const cart = ["shoes", "kurtas", "pants"]

const promise = createOrder(cart);

promise.then(function(orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
})

function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        if(!ValidateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err); 
        }
        const orderId ="12324243"
        if  (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000)
          
        }
    });

return pr;    

}

function ValidateCart(cart){
   return true; 
}






 


