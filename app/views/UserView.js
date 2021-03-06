const User = require("../models/User")

class UserView{
    static createUser(payload){
        if(payload == null)
        {
            return {error:'payload no existe'}
        }

        const properties = ['username','name','id']

        if(properties.some(propertie=>payload[propertie] === null)){
            return {error:'necesitan tener un valor válido'}
        }
        if(properties.some(propertie=>payload[propertie] === undefined)){
            return {error:'necesitan tener un valor válido'}
        }

        return new User(payload.id,payload.username,payload.name)
    }
}

module.exports = UserView