import NextAuth from "next-auth";
import { User as AppUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: AppUser;
  }

  interface User extends AppUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    accessToken?: string;
  }
}
