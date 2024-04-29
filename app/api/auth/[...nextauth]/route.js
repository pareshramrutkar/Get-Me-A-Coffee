import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose, { connect } from "mongoose"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import connectDb from "@/db/connectDb"
import Username from "@/app/[username]/page"


export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  //  **********************************

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider == "github") {
        // connect to database
        await connectDb();
        // check user is allready exist in the database
        const currentUser = await User.findOne({email: email})
        if(!currentUser) {
        // create new user
        const newUser = await User.create({
          email: user.email,
          username : user.email.split("@")[0],
        })
      }
      return true
    }
  },
    async session({session, user, token}) {
        const dbUser = await User.findOne({email: session.user.email})
        console.log(dbUser);
        session.user.name = dbUser.username
        return session
    },
  }
  })
  export {authOptions as GET, authOptions as POST}




// **********************************************

// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     if(account.provider == "github") {
//       // connect to database
//       const client = await mongoose.connect("mongodb+srv://amrutkarparesh12:Amrutkar1234@cluster0.ubxup5h.mongodb.net/")
//       // check
//       const currentUser = User.findOne({email: email})
//       if(!currentUser) {
//         // create new user
//         const newUser = new User({
//           email: email,
//           username : email.split("@")[0],
//         })
//         await newUser.save()
//         user.name = newUser.username
//       }
//       else{
//         user.name = currentUser.username
//       }
//       return true
//     }
//   }
// }