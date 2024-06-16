import Post from "../models/post.model.js"
import { errorHandler } from "../utils/error.js"

export const create =async (req,res,next) => {
    if(!req.user.isAdmin){
        return next(errorHandler(403,"Only Admin can create a post"))
    }
    if(!req.body.title || !req.body.content){
        return next(errorHandler(400,'Please provide all fields are required'))
    }
    const slug = req.body.title.split(' ').join("-").toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
    const newpost = new Post ({
        ...req.body,
        slug,
        userId:req.user.id
    })

    try {
        const savedPost = await newpost.save();
        res.status(201).json(savedPost)
    } catch (error) {
        next(error)
    }
}