const { gql } = require('apollo-server');

const historyTypeDefs = gql `
    type History {
        id: String!
        username: String!
        cc: String!
        title: String!
        text: String!
        creationDate: String!
    }

    input CreationInput {
        username: String!
        cc: String!
        title: String!
        text: String!
    }

    extend type Query {
        historyByData(data: String!): [History]
    }

    extend type Mutation {
        createHistory(history: CreationInput!): History
    }
`;

module.exports = historyTypeDefs;