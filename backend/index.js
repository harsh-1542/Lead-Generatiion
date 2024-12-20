const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const {UserCollection,MessageCollection} = require('./database');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
// app.use(express.static('public'));

app.use(cors());


app.get('/home', (req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.json({"users": ["John", "harsh"]})
})

// Handle lead form submission
app.post('/submit-lead',async (req, res) => {
       

        try {
            const data = { name: req.body.name, email: req.body.email, phone: req.body.phone };
            // console.log(data);

            const userdata = await UserCollection.create(data);
            console.log(userdata);  
            // res.status(200).json(userdata);
            res.status(200).sendFile(path.join(__dirname, 'public', 'success.html'));
            // res.status(200).redirect("/");

        } catch (error) {
            console.error('Error saving lead:', error);
            res.status(500).json({ message: 'Failed to save lead', error: error.message });
        }
    }
);

// Handle contact form submission
app.post('/contact', async (req, res) => {
    try {
        const data = { 
            name: req.body.name, 
            email: req.body.email, 
            message: req.body.message 
        };
        console.log(data);

        const messageData = await MessageCollection.create(data);
        // res.status(200).json(messageData);
        res.status(200).sendFile(path.join(__dirname, 'public', 'success.html'));
        
        // res.status(200).redirect("/");
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Failed to save message', error: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
