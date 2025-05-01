
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import { typeDefs } from "./schema.js";

//db
import { _db } from "./_db.js";

const resolvers = {
    Query:{
        games(){
            return _db.games
        },

        // lets take another function
        reviews(){
            return _db.reviews
        },

        // another function
        authors(){
            return _db.authors
        },
        //single return
        reviewSingle(_, args ){
            return _db.reviews.find((item)=> item.id === args.id)
        },
        gameSingle(_, args){
            return _db.games.find((item)=> item.id === args.id)
        },
        // fetch a game by title
        gameByTitle(_, args){
            return _db.games.find((item)=> item.title === args.title)

        }
    },
    //for nested query
    Game:{
     reviews(parent){
        return _db.reviews.filter((r)=> r.game_id === parent.id)
        }
    }
}
// server setup
const server = new ApolloServer({
    // typeDefs
    typeDefs,
    // resolvers
    resolvers
})

const{url} = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000);
