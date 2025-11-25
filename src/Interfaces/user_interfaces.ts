import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string().min(1, {message: "User ID is required"}),
    username: z.string().min(1, {message: "Username is required"}),
    email: z.string().min(1, {message: "Email is required"}),
    name: z.string().min(1, {message: "Name is required"}),
    age: z.int().optional()
}) 

export type User = z.infer<typeof UserSchema>;