import { z } from "zod";
import { UserSchema } from "../Interfaces/user_interfaces";

export const CreateUserDTO  = UserSchema.pick({ id: true, username: true, email: true, name: true });
export type CreateUserDTO = z.infer<typeof CreateUserDTO>;