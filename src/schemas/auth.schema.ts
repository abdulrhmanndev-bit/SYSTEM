import { z } from "zod";

type Translate = (key: string) => string;

export const LoginSchema = (t: Translate) =>
  z.object({
    email: z
      .string()
      .min(1, t("email.required"))
      .email(t("email.invalid")),

    password: z
      .string()
      .min(1, t("password.required"))
      .min(6, t("password.minLength")),

    remember: z.boolean(),
  });

export type LoginFormData = z.infer<
  ReturnType<typeof LoginSchema>
>;