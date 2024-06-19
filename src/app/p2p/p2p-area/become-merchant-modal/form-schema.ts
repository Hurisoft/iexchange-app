// imports
import { z } from "zod";

// schema
export const formSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
});  

// types
export type FormValues = z.infer<typeof formSchema>;
