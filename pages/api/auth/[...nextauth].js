import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongoDb"

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({account, profile}) {
            const user = await prisma.user.findUnique({
                where: {
                    email: profile.email
                }
            });
            if (account.provider === "google" && !user) {
                await prisma.user.create({
                    data: {
                        name: profile.name,
                        email: profile.email,
                        image: profile.image
                    },
                })
                return profile.email_verified && profile.email.endsWith("@gmail.com")
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
    },
    adapter: MongoDBAdapter(clientPromise),
})