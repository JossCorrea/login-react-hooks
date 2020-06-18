const AuthService = {
    authenticate:() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    token: 'uhulllll',
                    user: {
                        name: 'Fulanito',
                        email: 'fulanito@email.com'
                    }
                })
            }, 1000)
        } )
    }

}

export default AuthService;
