import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
type ProductType = ProductModel & mongoose.Document;
export interface ProductModel {
    name:{
        type: String,
        required: true
    }
    description:{
        type: String,
    }
    category: {
        type: String
    }
    picture: {
        type: String,
    }
    price: {
        type: Number,
        required: true
    }
};
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    category: {
        type: String
    },
    picture: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
});
const Product: Model<ProductType> = mongoose.model<ProductType>('Product', ProductSchema,'Products');
export default Product;