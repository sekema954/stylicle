require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
})




app.get('/', (req, res)=>{
    res.send('Welcome');
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});