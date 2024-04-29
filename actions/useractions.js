"use server"

import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import connectDb from "@/db/connectDb"
import mongoose, { connect } from "mongoose"
import Razorpay from "razorpay"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    //fetch the secret of the user who is getting the payment 
    let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret 
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret:secret})

    let options = {
        amount: Number.parseInt(amount),
        currency:"INR",
    }
    let x = await instance.orders.create(options)  

    // create object where show payment pending in database
    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message})
    return x;
}

export const fetchuser = async (username) => {
    await connectDb()
        let u = await User.findOne({username:username})
        let user = u.toObject({flattenObjectIds:true})
        return user
    }

export const fetchpayments = async (username) => {
    await connectDb()
    // fetch all payments sorted by decresing order amount and flatten object
        let p = await Payment.find({to_user : username, done:true}).sort({amount:-1}).limit(5).lean()
        return p
    }

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)
    // if the username being updated, check if user name is available
    if(oldusername !== ndata.username) {
        let u = await User.findOne({username: ndata.username})
        if(u) {
            return {error:"username allready exist"}
        }
        await User.updateOne({email: ndata.email}, ndata)
        // now update all the users in the Payments table
        await Payment.updateMany({to_user:oldusername}, {to_user: ndata.username})
    }
    else{
        await User.updateOne({email: ndata.email}, ndata)

    }
}