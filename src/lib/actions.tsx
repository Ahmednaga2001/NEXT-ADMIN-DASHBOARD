import { revalidatePath } from "next/cache";
import { User } from "./models";
import { DBConn } from "./utils";
import { redirect } from "next/navigation";
const bcrypt = require('bcrypt');


export const addUser = async (formData : {formData : {}}) => {
    "use server";
    try {
        DBConn()
        const { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData.entries());
        const hashPass = await bcrypt.hash(password , 8)        
        const newUser = new User({username, password:hashPass, email, phone, isActive, isAdmin, address});
        await newUser.save();
        revalidatePath("/dashboard/users")
        redirect("/dashboard/users");
    
        
    } catch (error) {
        console.error('Error saving user:', error);
    }
};

export const fetchUsers = async()=>{
    "use server"
    try {
        DBConn()
        const users = await User.find({})
        return users
        
        
    } catch (error) {
        throw new Error("faild to fetch users!")
    }
}
