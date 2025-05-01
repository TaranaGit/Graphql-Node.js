
export const typeDefs = `#graphql

type Game{
    id: ID!,
    title: String!,
    platform: [String!]!
    # adding new field
    reviews:[Review!]
}
type Review{
    id:ID,
    rating:Int!
    content:String!
        # adding new field
    authors:[Author]

}
type Author{
    id:ID!
    name:String!
    verified:Boolean!
    reviews:[Review!]
}
type Query{
     reviews: [Review]
    #  for a single object
    reviewSingle(id:ID!):Review

     games:[Game]
     gameSingle(id:ID!):Game
    #  fetch an object by title
    # we can fetch by id, but i didnt include for each object
     gameByTitle(title:String!):Game

     authors:[Author]
}
`

// the type we will include: int, float, string, boolean, ID 