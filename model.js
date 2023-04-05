//1. Thêm thư viện mongoose
const mongoose = require('mongoose');
//2. kết nối với cơ sở dữ liệu
mongoose.connect('mongodb://localhost/dbshop');

//3. Tạo schema users
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    gender: Boolean,
    avatar: String
}, {collection: 'users'});
//4.Tạo model user
const Users = mongoose.model('users', userSchema);

//3. Tạo schema products
const productSchema = new mongoose.Schema({
    tenSP: String,
    gia: Number,
    image: String,
    detail: String
}, {collection: 'products'});
//4.Tạo model product
const Products = mongoose.model('products', productSchema);
//3. Tạo schema contact
const contactSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    email: String,
    contact: String
}, {collection: 'contacts'});
//4.Tạo model product
const Contacts = mongoose.model('contacts', contactSchema);

module.exports = {Users, Products, Contacts};
