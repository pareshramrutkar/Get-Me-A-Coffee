import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import User from '../models/User'
import connectDb from '@/db/connectDb'
import { notFound } from 'next/navigation'


const Username = async ({params}) => {
  
  // if username is not present in the database, show 404 page
  let checkUser = async () => {
    await connectDb()
    let u = await User.findOne({username:params.username})
    if(!u) {
      return notFound()
    }
}
await checkUser()

  return (
    <>
    <PaymentPage username={params.username }/>
    </>
    )
  }
export default Username

export async function generateMetadata({params}) {
  return {
    title: `${params.username} - Get Me A Coffee`
  }
}


