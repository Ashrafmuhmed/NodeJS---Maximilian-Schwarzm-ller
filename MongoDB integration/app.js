const path = require('path');
const sequelize = require('./util/database');
const Product = require('./models/product');
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');
const errorController = require('./controllers/error');
const Cart = require('./models/cart');
const {v4: uuid} = require('uuid');
const orderItem = require('./models/orderItem');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const {fetchAll} = require("./models/product");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    (req, res, next) => {
        User.findByPk('1')
            .then(
                user => {
                    req.user = user;
                }
            )
            .then(
                _ => req.user.getCart()
            )
            .then(
                cart => {
                    if (!cart) {
                        req.user.createCart({
                            id: uuid(),
                        }).then(
                            cart => {
                                req.user.cart = cart;
                            }
                        )
                    } else {
                        req.user.cart = cart;
                    }
                    next();
                }
            )
            .catch(err => console.log(err));
    }
)

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
});
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

Order.belongsToMany(Product , { through : orderItem });
Product.belongsToMany( Order , { through : orderItem }) ;


sequelize.sync({force: false})
    .then(
        (result) => {
            return User.findByPk('1');
        })
    .then(
        user => {
            if (!user) {
                User.create({
                    username: 'Ashraf',
                    password: '123456',
                    email: 'ashraf@gmail.com',
                    id: '1'
                })
            }
            return user;
        }
    )
    .then(
        _ => app.listen(3000)
    )
    .catch(error => {
        console.log(error.message);
    })

