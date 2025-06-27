import { auth } from "@/lib/auth";
// path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);

// this is a catch all route under `/api/auth/*` like
// - /api/auth/sign-in
// - /api/auth/sign-up
// - /api/auth/get-session
