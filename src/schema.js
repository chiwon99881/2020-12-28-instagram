import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { loadFilesSync } from "@graphql-tools/load-files"
import path from "path";

const allTypes = loadFilesSync(path.join(__dirname, "/api/**/*.graphql"))
const allResolvers = loadFilesSync(path.join(__dirname, "/api/**/*.js"))

const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(allTypes),
    resolvers: mergeResolvers(allResolvers)
})

export default schema;