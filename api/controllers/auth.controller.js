import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400,'All fields are required'))
  }
  try {
    const hashPAssword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPAssword });
    await newUser.save();
    res.json({ message: "Signup Successful" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error)
  }
};

export const signin = async (req,res,next) => {
  const {email,password} = req.body;
  if(!email || !password || email === '' || password === ''){
    return next(errorHandler(400,"All fields are required"))
  }
  try {
    const validUser = await User.findOne({email})
    if(!validUser){
      return next(errorHandler(404,"User not found"));
    }
    const ValidPassword = bcryptjs.compareSync(password,validUser.password);
    if(!ValidPassword){
      return next(errorHandler(400,'Invalid Password'))
    }
    const token = jwt.sign({
      id : validUser._id
    },process.env.JWT_SECRET)

    const {password: pass, ...rest} = validUser._doc; //Remove the password from response

    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)

  } catch (error) {
    return next(error)
  }

}

export const google = async (req,res,next) => {
  const {email,name,googlePhotoUrl} = req.body
  try {
    const user = await User.findOne({email})
    if(user){
      const token = jsw.sign({id:user._id},process.env.JWT_SECRET);
      const {password,...rest} = user._doc
      res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
    }
    else{
      const generatePassword = Math.random().toString(36).slice(-8);
      const hashPAssword = bcryptjs.hashSync(generatePassword,10);
      const newUser = new User({
        username : name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
        email,
        password : hashPAssword,
        profilePicture : googlePhotoUrl
      })
      await newUser.save()
      const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
      const {password,...rest} = newUser._doc
      res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
    }

  } catch (error) {
    next(error)
  }
}