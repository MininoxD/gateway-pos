import { z } from 'zod'

export const cardCreatorHeadersSchema = z.object({
  token: z.string()
})
