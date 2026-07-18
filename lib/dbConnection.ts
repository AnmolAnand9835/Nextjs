import mongoose from "mongoose";

type ConnectObject = {
    isConnection?: number
}

const connection: ConnectObject = {}

async function dbCnnection():Promise<void> {
    if(connection.isConnection){
        console.log("Already connect to database");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGO_URI || '', {})

        connection.isConnection = db.connections[0].readyState

        console.log("DB connect sucessfully");
    }catch(error){
        console.log("Database connection failed", error)

        process.exit(1)
    }
}
export default dbCnnection