// imports
import { z } from "zod";

// schema
export const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
});  

// types
export type FormValues = z.infer<typeof formSchema>;
