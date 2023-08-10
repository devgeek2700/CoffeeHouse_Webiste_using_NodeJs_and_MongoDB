require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
const cookieParser =  require('cookie-parser');
require('./db/conn');
const Coffee = require('./models/customer');
const authenticate = require('./middleware/auth');
const port = process.env.PORT || 4000;


const app = express();
// database
app.use(cookieParser()); // -----> token
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// hbs engine templates
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const PartialsPath = path.join(__dirname, "../templates/partials");


app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(PartialsPath);

app.get("/login", (req, res) =>{
    res.render('login');
});

app.get("/Register", (req, res) =>{
    res.render('Register');
});


// Login part
app.post('/login', async(req, res) =>{
    try{

        const mail = req.body.Email;
        const LogPassword = req.body.Password;

        const logMail = await Coffee.findOne({Email: mail});
        const isMatch = await bcrypt.compare(LogPassword, logMail.Password);

        // check token
        const token =  await logMail.generateToken();

        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 100000),
          httpOnly: true
        });

        if(isMatch){
            res.status(201).render('index.hbs', {
                username: logMail.Name,
            });
          }else{
            res.send("Invalid Credentials!");
          }

    }catch(error){
        res.status(400).send(error);
    }
})

// Register part
app.post('/Register', async(req, res) =>{
    try{

       const password = req.body.Password;
       const confirmpassword = req.body.Confirmpassword;

       if(password === confirmpassword){
        const storeData = new Coffee({
            Name: req.body.Name,
            Email : req.body.Email,
            Password : password,
            Confirmpassword: confirmpassword
        })

        // create token
        const token =  await storeData.generateToken();

        const myData = await storeData.save();
        res.status(201).render('login.hbs');
       }
       else{
        // res.send("Password is Incorrect!");
        res.send("Register", {
            Inavlid_msg: "Password is Incorrect!"
        });
       }
    }catch(error){
        res.status(400).send(error);
    }
})











app.get("/", (req, res) =>{
    res.render('index');
});

app.get("/Mocha",authenticate, (req, res) =>{
    res.render('Mocha');
});

app.get("/Vichaar",authenticate, (req, res) =>{
    res.render('Vichaar');
});

app.get("/Raat",authenticate, (req, res) =>{
    res.render('Raat');
});

app.get("/NutKhat",authenticate, (req, res) =>{
    res.render('NutKhat');
});

app.get("/AddtoCart", (req, res) =>{
    res.render('AddtoCart');
});

app.get("/BuyOrder",authenticate,(req, res) =>{
    res.render('BuyOrder');
});

app.get("/Mocha/BuyOrder",(req, res) =>{
    res.render('BuyOrder');
});

app.get("/Vichaar/BuyOrder",(req, res) =>{
    res.render('BuyOrder');
});

app.get("/Raat/BuyOrder",(req, res) =>{
    res.render('BuyOrder');
});

app.get("/NutKhat/BuyOrder",(req, res) =>{
    res.render('BuyOrder');
});

// Logout part
app.get("/logout",authenticate, async(req, res) =>{
    try{
        req.user.tokens = [];

        res.clearCookie("jwt");
        const userlog = await req.user.save();
        res.status(201).render('index.hbs');
    
        console.log("Logout Sccessfully!");
  
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('*', (req, res) => {
    res.render('Error.hbs');
});

app.listen(port, ()=>{
    console.log(`Running on port No ${port} `);
});