const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class HistoryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.history_api_url;
    }

    async createHistory(history) {
        console.log(history);
        history = new Object(JSON.parse(JSON.stringify(history)));
        console.log(history);
        return await this.post(`/history`, history);
    }

    async historyByData(data){
        return await this.get(`/history/${data}`);
    }
}

module.exports = HistoryAPI;