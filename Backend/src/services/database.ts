import mongoose from "mongoose";

const uri:string = "mongodb+srv://gentsgentleman:gentsgentleman7743@clauster1.zfn7x48.mongodb.net/Agend";

const connection = async ():Promise<void>=>{
    try {
        await mongoose.connect(uri);
        console.log('Success connection with database');
    } catch (error) {
        console.log('Error in the database: ' + error);
        process.exit(1);
    }
}

export default connection;
