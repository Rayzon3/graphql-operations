const { ApolloServer } = require("apollo-server")
const gql = require('graphql-tag')


const { users } = require("./FakeData")

const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        fav_anime: String!
    }
    type Query {
        getUsers: [User!]!
    }
`

const resolvers = {
    Query: {
        getUsers(){
            try {
                return users
            }catch(err){
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: 5000})
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })
