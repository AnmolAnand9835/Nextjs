import { z } from "zod"

export const usernameValidation = z
    .string()
    .min(2, "Uaername must atleast 2 caracters")
    .max(20, "Username must not be 20 caracters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain specal caracter")
    

export const singUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({
        message: "Invlad email address"
    }),
    password: z.string().min(6, {message: "Pasword must be at least 6 digit"})
    
})