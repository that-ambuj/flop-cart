import NextAuth from "next-auth";
import { authOptions } from "@flop-cart/server/auth";

export default NextAuth(authOptions);
