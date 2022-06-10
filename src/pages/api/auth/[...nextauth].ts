import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //   },
      // },
      // profile(profile){
      //   return{
      //     id: profile.id,
      //     name: profile.name || profile.login,
      //     email: profile.email,
      //     image: profile.avatar_url
      //   }
      // }
    }),
  ],
  callbacks: {
     async session({ session, user}) {
        try{
          return {
            ...session, 
            id: user.sub,
          }
        }catch{
          return{
            ...session,
            id: null,
          }
        }
      // try{
      //   return{
      //     ...session,
      //     id: profile.sub,
          
      //   }
      // }catch{
      //   return{
      //     ...session,
      //     id: null, 
      //   }
      // }
    },
   
    async signIn({ user, account, profile}) {
      const {email } = user;
      try {
        return true
      } catch (error) {
        console.log('Deu erro', error);
        return false
      }
    },
  
  }
})