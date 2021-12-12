const usersResolver = {
    Query: {
        userDetailById: (_, {userId}, { dataSources}) => {
            return dataSources.authAPI.getUser(userId)
        }, userAll: (_, __, {dataSources}) => {
            return dataSources.authAPI.userAll();
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, {dataSources}) => {
            const authInput= {
                username: userInput.username,
                email: userInput.email,
                edad: userInput.edad,
                cc: userInput.cc,
                tel: userInput.tel,
                root: userInput.root,
            }
            return await dataSources.authAPI.createUser(userInput);
        },
        logIn: async (_, {credentials}, {dataSources}) =>{
            return await dataSources.authAPI.authRequest(credentials);
        }
    }
};

module.exports = usersResolver;