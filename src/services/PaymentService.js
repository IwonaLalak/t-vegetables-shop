export default {

    makeFakePayment() {
        return new Promise(resolve => {
            setTimeout(()=>resolve('success'), 3000);
        });
    }

}