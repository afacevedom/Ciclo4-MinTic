const historyResolver = {
    Query: {
        historyByData: (_, {data}, {dataSources}) => {
            return dataSources.historyAPI.historyByData(data);
        },
    },
    Mutation:{
        createHistory: (_, {history}, {dataSources, userIdToken}) => {
            if (userIdToken == 3)
                return dataSources.historyAPI.createHistory(history);
            else
                return null;
        }
    }
};


module.exports = historyResolver;