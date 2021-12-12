const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }
    
    type userId {
        UserId: Int!
    }
    

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        fullname: String!
        email: String!
        edad: Int!
        cc: String!
        tel: String!
        root: Boolean!
    }

    type UserDetail {
        id: Int!
        username: String!
        fullname: String!
        Mail: String!
        Edad: Int!
        DocIdentidad: String!
        Telefono: String!
        Doctor: Boolean!
    }

    type Mutation{
        signUpUser(userInput: SignUpInput!): Tokens!
        logIn(credentials: CredentialsInput!): Tokens
        refreshToken(refresh: String!): Access!
        verifyToken(token: String!): userId!
    }

    type Query{
        userDetailById(userId: String!): UserDetail
        userAll: [UserDetail]
    }
`;

module.exports = authTypeDefs;