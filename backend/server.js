require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require("../backend/models/user_schema");
const path = require('path');
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.VITE_APP_GMAIL_USER,
        clientId: process.env.VITE_APP_CLIENT_ID,
        clientSecret: process.env.VITE_APP_CLIENT_SECRET,
        refreshToken: process.env.VITE_APP_REFRESH_TOKEN
    },
});

//subscription endpoint api
app.post('/subscribe', async (req, res)=>{
    const { email } = req.body;

    if(!email) {
        return res.status(400).send('Email is required');
    }

    const mailOptions = { 
        from:process.env.VITE_APP_GMAIL_USER,
        to: email,
        subject: 'Thank you for Subscribing',
        text: 'We appreciate you',
        html: `
        <img src="https://i.imgur.com/O7UX29q.png">
        <h1>Thank You for Subscribing!</h1>
        <p>We appreciate you joining our community. Stay tuned for exciting updates!</p>
        <img src="https://i.imgur.com/hVCp7Sd.jpeg">
        <p>Vist our <a href="http://localhost:5173/">website</a></p>
        <p>Do not Reply</p>
        `,

    };

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).send('Subscription email sent');
    } catch(error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});



//connect to mongodb
mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.error("MongoDB Connection Error: ", err))


//Register endpoint 
app.post('/api/register', async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields required"});
        }

        //check if user exits already
        const existingUser = await user.findOne({ email });
        if(existingUser) {
            return res.status(400).json({message: "User Already Exists!"});
        }

        //create new user
        const newUser = new user({ name, email, password });
        await newUser.save();
        res.status(201).json({message: "User registered Successfully."});
    } catch(error) {
        console.error('Error', error);
        res.status(500).json({ message: "Server Error"});
    }
});


//Login user


//server frontend to the backend
const frontendPath = path.join(__dirname,  '../dist');
app.use(express.static(frontendPath));

app.get('*', (req, res)=>{
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});