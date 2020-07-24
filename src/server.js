const twit = require('twit');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const twitter = new twit({
    consumer_key: 'Lqz9zckidDHFJM9gbVjMoyF3Y',
    consumer_secret: '7xWpp6FJ9CA50QfFdVmFrozI1mitTTBjF5NmQGlGzSoR6ud8Qj',
    access_token: '144202568-IJKneWFWdsBM221ce3LOwHyWySbDcR0dWp3vYXwH',
    access_token_secret: 'h9TeghL01ni5gQpv27NZiB3qa7Cf0QMGwCWfeninQFmOx',
    strictSSL: true,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/getUserProfiles/:searchTerm', (req, res) => {
    console.log('Received Value>>>', req.params.searchTerm)
    const searchTerm = req.params.searchTerm;
    twitter.get('users/search', { q: searchTerm }, (error, data, response) => {   
        res.status(200).send(JSON.stringify(data));
    })
})

app.listen(3000, () => {
    console.log('Server is up for twitter at 3000');
})

