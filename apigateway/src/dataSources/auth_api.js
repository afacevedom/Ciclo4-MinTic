const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return this.post(`/register/`, user);
    }

    async getUser(userId){
        return await this.get(`/user/${userId}`);
    }

    userAll(){
        return this.get('/users/');
    }

    authRequest(credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return this.post(`/login/`, credentials);
    }
}

module.exports = AuthAPI;