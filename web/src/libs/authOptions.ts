import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { JWT } from 'next-auth/jwt';

// async function refreshToken(token: JWT): Promise<JWT> {

//     const res = await fetch(`${process.env.URL_BE}/auth/refresh`, {
//         method: "POST",
//         headers: {
//             authorization: `Bearer ${token?.tokens?.refreshToken}`,
//         },
//     });
//     const response = await res.json();

//     return {
//         ...token,
//         tokens: response.tokens,
//     };
// }

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }


                const { username, password } = credentials

                //call api login here
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (res.status === 400) {
                    throw new Error('Invalid credentials');
                }

                return await res.json()
            }
        })
    ],
    callbacks: {
        // async jwt({ token, user }) {

        //     // if (user) return { ...token, ...user }
        //     // if (new Date().getTime() < token.tokens.expriesIn) return token

        //     // return await refreshToken(token)

        // },

        // async session({ token, session }) {

        //     // session.user = token.user
        //     // session.tokens = token.tokens

        //     // return session
        // },
    },
    secret: process.env.NEXTAUTH_SECRET,
}
