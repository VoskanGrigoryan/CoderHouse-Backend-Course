import { config } from 'dotenv';
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import newProd from '../controllers/products.js';
// import { createUser, loginUser } from '../controllers/user.js';

class RouterTest {
    constructor() {
        this.controllerTest = new newProd()
    }

    start() {
        //GraphQL schema?
        const schema = buildSchema(`
            type Query {
                productos(_id: String): [Producto]
            }
            type Mutation {
                newProd(
                    title: String!,
                    description: String!,
                    price: Number!,
                    size: String!,
                    delivery: Boolean!,
                    location: String!
                ): Producto
            },
            type Producto {
                _id: String,
                title: String!,
                description: String!,
                price: Number!,
                size: String!,
                delivery: Boolean!,
                location: String!
            }
        `)

        const root = {
            newProd: title => this.controllerTest.newProd(title)
        }

        return graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}

export default RouterTest;
// import express from 'express';
// import { createUser, loginUser } from '../controllers/user.js';

// const router = express.Router();

// router.post('/user/register', createUser);
// router.post('/user/login', loginUser);

// export default router;
