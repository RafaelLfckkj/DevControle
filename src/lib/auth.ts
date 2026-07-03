import {PrismaAdapter} from "@auth/prisma-adapter"

import GoogleProvider from "next-auth/providers/google"
import {AuthOptions, NextAuthOptions} from "next-auth"
import prismaClient from "./prisma"

export const authOprions: AuthOptions ={
    adapter: PrismaAdapter(prismaClient),
    providers: {
        
    }
}