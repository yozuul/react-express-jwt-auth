class Api {
    async getAllUsers() {
        const allUsers = await UserModel.findAll({
            attributes: ['email'],
            raw : true
        })
        return allUsers
    }
}

export const ApiService = new Api()