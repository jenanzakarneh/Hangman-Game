
import app from './app';
import mongoose from "mongoose";


const PORT= process.env.PORT ||5000;



mongoose.connect('mongodb://localhost:27017/hangman-game').then(()=>{
    console.log(`Connected to database`);

    app.listen(PORT,()=>{
        console.log(`App is running on port #${PORT}`)
    });
}
).catch(console.error);

