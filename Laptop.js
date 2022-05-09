// Do not change this file
require('dotenv').config();

const mongoose = require('mongoose');
const URI = process.env['MONGO_URI'];

main().catch(error => {
    console.log(error);
    throw new Error('Unable to Connect to Database');
});

async function main() {
    await mongoose.connect(URI);
}

const laptopSchema = new mongoose.Schema({
    laptopName: { type: String, required: true, unique: true },
    thumnail: { type: Array, required: true },
    policy: { type: Object },
    price: { type: Number, set: setPrice, get: format },
    installment: { type: String },
    configuration: { type: Object, required: true },
    onlinePrice: { type: Number, required: true, set: setPrice, get: format },
    gift: { type: Object },
    laptopDetail: { type: Object, required: true },
    rate: { type: Object },
    plugin: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plugin', default: [] }],
    relateProduct: { type: Array, default: [] },
    laptopType: { type: String },
    brand: { type: String, require: true }
}, { timestamps: true })

const Laptop = mongoose.model('Laptop', laptopSchema);

const pluginSchema = new mongoose.Schema({
    name: { type: String, required:true, unique: true },
    image: { type: String, required: true },
    onlyOnline: { type: Boolean },
    oldPrice: { type: Number, set: setPrice, get: format  },
    onlinePrice: { type: Number, required: true, set: setPrice, get: format },
    stars: { type: Number, default: 0 },
    rateNumber: { type: Number, default: 0 },
    laptops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Laptop', default: [] }],
}, { timestamps: true })

const Plugin = mongoose.model('Plugin', pluginSchema);

function format(n) {
    return n.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
function setPrice(n) {
    if(n){
        return parseInt(n.split('.').join(''));
    }
    else return 0;
}
module.exports = { Laptop, Plugin };