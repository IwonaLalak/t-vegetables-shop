export const countPriceSum = (arr) =>{

    let sum = 0;
    for(let i =0; i<arr.length;i++){
        sum = sum + arr[i].price * arr[i].quantity
    }
    return sum;
};