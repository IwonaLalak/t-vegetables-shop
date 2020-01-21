export default {

    login(user) {
        return new Promise((resolve, reject) => {

            localStorage.setItem('_vegetablesapp_current_user', btoa(user))
            if (this.checkIfUserIsLogged())
                resolve(true)
            else reject('Cannot login')

        })
    },

    logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('_vegetablesapp_current_user');
            if (!this.checkIfUserIsLogged())
                resolve(true)
            else reject('Cannot logout')
        })
    },

    checkIfUserIsLogged() {
        return Boolean(localStorage.getItem('_vegetablesapp_current_user'));
    },

    getCurrentUser(encoded = false) {
        if (Boolean(encoded))
            return localStorage.getItem('_vegetablesapp_current_user');
        else    // decoded
            return atob(localStorage.getItem('_vegetablesapp_current_user'));
    }
}