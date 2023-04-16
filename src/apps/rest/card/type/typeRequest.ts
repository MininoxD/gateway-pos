import { z } from 'zod'
import { CardCreatorParametersSchema } from '../schema/cardCreatorParametersSchema'
export type CardCreatorParametersSchemaType = z.infer<
  typeof CardCreatorParametersSchema
>
