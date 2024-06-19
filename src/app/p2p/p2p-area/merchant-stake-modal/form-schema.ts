// imports
import { z } from "zod";

// schema 
export const formSchema = z.object({
  amount: z.string(),
  curreny: z.string().email(),
});

// types
export type FormValues = z.infer<typeof formSchema>;