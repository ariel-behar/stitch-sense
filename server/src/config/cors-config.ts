import * as env from 'dotenv';
env.config();

let allowedOrigins: string[] | [];

if (process.env.NODE_ENV === 'development') {
    allowedOrigins = ['http://localhost:5173', 'http://localhost:3000/', 'https://stitch-sense.vercel.app'];
} else {
    allowedOrigins = ['https://www.stitch-sense.com/', 'https://stitch-sense.onrender.com', "https://stitch-sense.vercel.app/"];
}

export default allowedOrigins;