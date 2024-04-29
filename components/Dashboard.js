"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from "@/actions/useractions"
import { Bounce, toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({});

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
    else {
      getData()
    }
  }, [router, session]);

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    let a = await updateProfile(e, session.user.name)
    toast('Profile updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */ }
    <ToastContainer />
    <div className="container mx-auto py-5 px-8">
      <h1 className="text-center text-3xl my-5 font-bold">Welcome to Dashboard</h1>

      <form className="max-w-2xl mx-auto" action={handleSubmit}>
        <div className="my-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input value={form.name?form.name:" "} onChange={handleChange} type="text" name="name" id="name" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input value={form.email?form.email:" "} onChange={handleChange} type="text" name="email" id="email" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input value={form.username?form.username:" "} onChange={handleChange} type="text" name="username" id="username" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
          <input value={form.profilepic?form.profilepic:" "} onChange={handleChange} type="text" name="profilepic" id="profilepic" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="pic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
          <input value={form.coverpic?form.coverpic:" "} onChange={handleChange} type="text" name="coverpic" id="coverpic" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
          <input value={form.razorpayid?form.razorpayid:" "} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="my-2">
          <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
          <input value={form.razorpaysecret?form.razorpaysecret:" "} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <button type="submit" className=" my-5 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Save</button>

        
    </form>
    </div>
    </>
  )
}

export default Dashboard
