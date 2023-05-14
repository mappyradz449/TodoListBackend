import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

//after importing initialize express
const app = express();
app.use(cors({
      origin: 'https://mahatodolist.netlify.app'
}));


//these below two lines need to be done taking the help of body-parser ORRR,, only express can also do the work
// app.use(express.json({extended:true}));
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', Routes);

const port = 8000;

Connection();

app.listen(port, () => console.log(`Server running on PORT ${port}`));

