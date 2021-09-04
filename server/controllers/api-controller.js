class Api {

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users)
        } catch (err) {
            next(err)
        }
    }
}

export const apiController = new Api()