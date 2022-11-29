import express from 'express';
import 'dotenv/config'
import { connectDB } from './config/db';
import authRouter from './routes/auth.route';


const app = express();
connectDB();


app.use(express.json());
app.use('api/v1/user', authRouter)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log('Server is running in port : ' + PORT);
});