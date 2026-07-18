import {z} from "zod"
import { acceptMessageSchema } from "./acceptMessageSchema"

export const singInSchema = z.object({
    acceptMessage: z.boolean
})