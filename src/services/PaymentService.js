export default {

    makeFakePayment() {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    }

}