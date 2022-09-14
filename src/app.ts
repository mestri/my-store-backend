import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from './models/Product';
import cors from 'cors';

config();


// mongoose.connect('mongodb://localhost:27017/mystore')
mongoose.connect('mongodb+srv://admin:admin@cluster0.r3lod3o.mongodb.net/?retryWrites=true&w=majority')
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

const app: Application = express();

app.use(express.json());

app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Express server with TypeScript');
});

app.get('/products', async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find();
    res.send(products);
});

app.get('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findById(req.params.id);
    console.log('product: ', product);
    res.send(product);
});

app.post('/products', async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.create(req.body);
    console.log('product: ', product);
    res.send(product); 
    // console.log(req.body)
});

app.delete('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    const resp = await Product.findByIdAndDelete(req.params.id);
    // console.log('product: ', product);
    res.send(resp);
});

app.put('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    const productUpdated = await Product.findById(req.params.id);
    console.log('product: ', productUpdated);
    res.send(productUpdated);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

