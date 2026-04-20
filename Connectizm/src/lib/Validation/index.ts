import * as z from "zod"
export const SigUpValidation = z.object({
  name: z
        .string()
        .min(3, "Name must be at least 3 characters.")
        .max(10, "Name must be at most 10 characters.")
        .regex(
          /^[a-zA-Z0-9_]+$/,
          "Name can only contain letters, numbers, and underscores."
        ),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(10, "Username must be at most 10 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
    email: z.string().email("Please enter a valid email address."),
    password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
})