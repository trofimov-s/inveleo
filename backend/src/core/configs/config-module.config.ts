import { EnvKeys } from '@/shared/enums';
import type { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: Joi.object({
    [EnvKeys.PORT]: Joi.number().default(3000),
    [EnvKeys.DATABASE_URL]: Joi.string().uri().required(),
    [EnvKeys.FRONTEND_URL]: Joi.string().uri().required(),
  }),
};
