const mongoose = require("mongoose");

export const DBConn = () => {
    
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((e) => {
            // throw new Error(e.message);
            console.log(e.message);
            
        });
};
