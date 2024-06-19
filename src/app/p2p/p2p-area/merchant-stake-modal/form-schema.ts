// imports
import { z } from "zod";

// schema 
export const formSchema = z.object({
  amount: z.string(),
  currency: z.string(),
});

// types
export type FormValues = z.infer<typeof formSchema>;