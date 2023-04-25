import mongoose from "mongoose";

export const CONNECT_DB = (Address, DbName) => {
    mongoose.connect(`${Address}/${DbName}`).then(() => console.log("DB CONNECTED...")).catch((err)=>console.log(err))
}
