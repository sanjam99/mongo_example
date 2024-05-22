const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sanjam99:sanket8788@cluster0.m6dkq1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const internSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
    city: String
} ,{collection: 'intern'});

const Intern = mongoose.model('intern', internSchema);

app.get('/data', async (req, res) => {
    try {
        const data = await Intern.find();
        console.log('Data fetched from MongoDB:', data);
        res.json(data);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
