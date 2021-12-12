const historyResolver = {
    Query: {
        historyByData: (_, {data}, {dataSources}) => {
            return dataSources.historyAPI.historyByData(data);
        },
    },
    Mutation:{
        createHistory: (_, {history}, {dataSources}) => {
            return dataSources.historyAPI.createHistory(history);
        }
    }
};


module.exports = historyResolver;