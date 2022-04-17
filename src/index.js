const express = require('express');
const app = express();
const path = require('path');

const sequelize = require('./config/database');

const User = require('./models/User');
const Course = require('./models/Course');
const UserCourse = require('./models/UserCourse');
const Topic = require('./models/Topic');
const Exam = require('./models/Exam');
const Question = require('./models/Question');
const Answer = require('./models/Answer');
const UserExam = require('./models/UserExam');
const Kolb = require('./models/Kolb');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const initHandlebars = require('./config/handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { swaggerOptions } = require('./swagger');
const { auth } = require('./middlewares/auth');

const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

const PORT = process.env.PORT || 5500;

//Set up swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

initHandlebars(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(auth);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../stem-swift-academy-fe/build")));
}

app.use(routes);

sequelize.sync()
    .then(() => {
        console.log('Connected to db...');
    })
    .catch(err => {
        console.log('Unable to connect to database: ', err);
    });

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));