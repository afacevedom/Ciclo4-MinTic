const usersResolver = {
    Query: {
        userDetailById: (_, {userId}, { dataSources, userIdToken}) => {
            if (userId == userIdToken || userIdToken == 3)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        }, userAll: (_, __, {dataSources, userIdToken}) => {
            if (userIdToken == 3)
                return dataSources.authAPI.userAll();
            else
                return null;
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
        },
        refreshToken: async (_, {refresh}, {dataSources}) => {
            return await dataSources.authAPI.refreshToken(refresh);
        }
    }
};

module.exports = usersResolver;