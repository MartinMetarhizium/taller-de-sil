import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import cors from 'cors';

async function start() {
    const url = `mongodb+srv://martinhorn2014:cZzeQcltSuxgvfTX@vue-project.kodctjv.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);

    const app = express();
    app.use(express.json());
    app.use(cors()); // Enable CORS for all routes

    // Serve static files
    app.use('/images', express.static(path.join(__dirname, '../assets')));

    app.use(express.static(
        path.resolve(__dirname, '../dist'),
        {maxAge: '1y', etag: false},
    ));

    await client.connect();
    const db = client.db('fsv-db');

    app.get('/api/products', async (req, res) => {
        const products = await db.collection('products').find({}).toArray();
        res.send(products);
    });

    async function populatedCartIds(ids) {
        return Promise.all(ids.map(id => db.collection('products').findOne({ id })));
    }

    app.get('/api/users/:userId/cart', async (req, res) => {
        const user = await db.collection('users').findOne({ id: req.params.userId });
        if (user && user?.cartItems || []) {
            const populatedCart = await populatedCartIds(user?.cartItems || []);
            res.json(populatedCart);
        } else {
            res.status(404).json({ error: 'User not found or cart is empty' });
        }
    });

    app.post('/api/users/:userId/cart', async (req, res) => {
        const userId = req.params.userId;
        const productId = req.body.id;

        const existingUser = await db.collection('users').findOne({id:userId});

        if (!existingUser) {
            await db.collection('users').insertOne({id:userId, cartItems: []});
        }

        await db.collection('users').updateOne({ id: userId }, {
            $addToSet: { cartItems: productId }
        });

        const user = await db.collection('users').findOne({ id: req.params.userId });
        const populatedCart = await populatedCartIds(user?.cartItems || []);
        res.json(populatedCart);
    });

    app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
        const userId = req.params.userId;
        const productId = req.params.productId;

        await db.collection('users').updateOne({ id: userId }, {
            $pull: { cartItems: productId }
        });

        const user = await db.collection('users').findOne({ id: req.params.userId });
        const populatedCart = await populatedCartIds(user?.cartItems || []);
        res.json(populatedCart);
    });

    app.get('/api/products/:productId', async (req, res) => {
        const productId = req.params.productId;
        const product = await db.collection('products').findOne({ id: productId });
        res.json(product);
    });

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    const port = process.env.PORT || 8000

    app.listen(port, () => {
        console.log('Server is listening on port' + port);
    });
}

start();
