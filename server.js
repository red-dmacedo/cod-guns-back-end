// ===== Imports =====
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const gunRouter = require('./controllers/guns');

// ===== Constant Vars =====
dotenv.config();

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

// ===== Hooks =====
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Conncted to MongoDB ${mongoose.connection.name}`);
});

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(cors({ origin: ['http://127.0.0.1:5173', 'http://localhost:5173'] }));
app.use(express.json());

// ===== Routes =====
app.use('/guns', gunRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});