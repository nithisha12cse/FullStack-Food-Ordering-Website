import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nithi:nithi123@cluster0.bktm4vb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"));
 
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your database user's password else it will show an error.