import mongoose from "mongoose";

const uri:string = "mongodb+srv://matiasprietohernan:IZlpP7hqO5o0IZiZ@cluster0.i8uuu.mongodb.net/Agend";

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
