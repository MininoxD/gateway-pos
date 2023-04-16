import { z } from 'zod'

export const CardCreatorParametersSchema = z.object({
  cardNumber: z.coerce.number(),
  cardCvv: z.coerce.number(),
  cardExpirationYear: z.string().regex(/^\d{4}$/),
  cardExpirationMonth: z.string().regex(/^(0?[1-9]|1[0-2])$/),
  email: z.string().email()
})
