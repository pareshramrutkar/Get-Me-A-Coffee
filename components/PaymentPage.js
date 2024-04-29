"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import {fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react' 
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'


const PaymentPage = ({ username }) => {
const [paymentform, setpaymentform] = useState({name:"", message:""});
const [currentUser, setcurrentUser] = useState({});
const [payments, setpayments] = useState([])
const router = useRouter()
const { data: session, update } = useSession()


useEffect(() => {
    getData()
  }, []);

    const handleChange = (e) => {
        setpaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments) 
    }

    const pay = async (amount) => {
        // get payment order ID
        let a = await initiate(amount, username, paymentform)
        let orderId=a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Coffee ", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Paresh Amrutkar", //your customer's name
                "email": "paresh.amrutkar@example.com",
                "contact": "8788308615" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Get Me A Coffee Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>

            {/* <button id="rzp-button1">Pay</button> */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='object-cover w-full h-44 md:h-96' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-12 md:-bottom-14 left-[36%] md:left-[46%] border-2 border-white rounded-full' >
                    <img width={114} className=' rounded-full h-24 md:h-28' src={currentUser.profilepic} alt=""/>
                </div>
            </div>
            <div className='info flex flex-col justify-center items-center my-16 gap-2' >
                <div className='font-bold'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Lets {currentUser.name} Help To Get Coffee
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . {currentUser.name} has raised ₹{payments.reduce((a,b)=>a+b.amount, 0)} funds
                </div>

                <div className='payments flex gap-3 w-[85%] mt-11 flex-col md:flex-row'>
                    <div className='supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-10'>
                        {/* list of all supportes leaderboard */}
                        <h2 className='text-2xl font-bold my-5'>Top 5 Supporters</h2>
                        <ul className='mx-2'>
                            {payments.length == 0 && <li>No Payments Yet</li> }
                            {payments.map((p,i)=> {
                            return <li className='flex gap-2 items-center my-4'>
                                <img width={24} className='rounded-3xl' src="/avatar.jpg" alt="" />
                                <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
                            </li>
                            })}
                        </ul>
                    </div>

                    <div className='makepayment w-full md:w-1/2 bg-slate-900 rounded-lg p-10'>
                        <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
                        <div className='flex gap-2 flex-col'>

                            {/* input for payment name, message, amount */}
                            < input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full rounded-lg p-2 bg-slate-950' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full rounded-lg p-2 bg-slate-950' placeholder='Enter messege' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full rounded-lg p-2 bg-slate-950' placeholder='Enter Amount' />

                            <button onClick={()=> pay(Number.parseInt(paymentform.amount)*100)} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 disabled:dark:shadow-lg dark:shadow-blue-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 divide-slate-300 disabled:from-slate-500" disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1 }> Pay </button>
                        </div>
                        {/* or choose from these amounts */}
                        <div className='flex gap-5 mt-5 '>
                            {/* <h2 className='flex flex-col'>OR</h2> */}
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>pay(1000)}>Pay ₹10</button>

                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>pay(2000)}>Pay ₹20</button>

                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>pay(5000)}>Pay ₹50</button>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default PaymentPage
