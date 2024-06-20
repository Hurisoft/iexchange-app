// imports
import { z } from "zod";

// form schema
export const formSchema = z.object({
  from: z.object({
    token: z.string({
      message: "Please select from token",
    }),
    amount: z.string({
      message: "Please enter from token amount",
    }),
  }),
  to: z.object({
    token: z.string({
      message: "Please select to token",
    }),
    amount: z.string({
      message: "Please enter to token amount",
    }),
  }),
  settings: z.object({
    slippage: z.number().optional(),
    deadline: z.number().optional(),
  }),
});

// type
export type FormValues = z.infer<typeof formSchema>;
