// import
import { z } from "zod";

// schema
export const formSchema = z.object({
  tokenAmount: z.number().positive(),
  currencyAmount: z.number().positive(),
})

// types
export type FormValues = z.infer<typeof formSchema>;