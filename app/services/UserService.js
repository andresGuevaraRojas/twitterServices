const User = require("../models/User")

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }

    static getInfo(user){
        const infoList = [
            user.id,
            user.username,
            user.name,
            user.bio
        ]
        return infoList
    }

    static updateUserName(user,newUserName){
        user.setUserName = newUserName
    }

    static getAllUserNames(users){
        return users.map(user=>user.username)
    }
}

module.exports = UserService