import 'dotenv/config';

const a = (message) => {
    console.log(message);
    console.log(process.env.MY_SECRET);
};

a('Hello');