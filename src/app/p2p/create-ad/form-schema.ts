// imports
import { z } from "zod";

// enums
import { SupportedCurrencies, SupportedMethods, TradeType } from "@/common/types";

// schema
export const formSchema = z.object({
  token: z.string(),
  currency: z.nativeEnum(SupportedCurrencies),
  paymentMethod: z.nativeEnum(SupportedMethods),
  rate: z.number(),
  minAmount: z.number(),
  maxAmount: z.number(),
  offerType: z.nativeEnum(TradeType),
  terms: z.string().optional(),
});

// types
export type FormValues = z.infer<typeof formSchema>;
