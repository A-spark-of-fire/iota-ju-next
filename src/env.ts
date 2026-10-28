import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z
    .string()
    .min(1, 'DATABASE_URL is required')
    .url('DATABASE_URL must be a valid PostgreSQL connection URI'),
  PAYLOAD_SECRET: z
    .string()
    .min(32, 'PAYLOAD_SECRET must be at least 32 characters long'),
  SERVER_URL: z
    .string()
    .min(1, 'SERVER_URL is required')
    .url('SERVER_URL must be a valid URL'),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',
});
