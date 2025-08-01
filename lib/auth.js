import { betterAuth } from "better-auth/*";
import prismaAdapter from "better-auth-prisma-adapter"; // <- Ayrı adapter paketine geç

import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma),
});