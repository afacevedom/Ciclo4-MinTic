const {gql} = require('apollo-server');

const historyTypeDefs = gql `
    type History {
        id: String!
        username: String!
        cc: String!
        title: String!
        text: String!
        creationDate: String!
    }
    
    input HistoryInput {
        username: String!
        cc: String!
        title: String!
        text: String!
    }
    
    extend type Query {
        historyBySearch(data: String!): [History]
    }
    
    extend type Mutation {
        createHistory(history: HistoryInput!): History
    }
`;

module.exports = historyTypeDefs;