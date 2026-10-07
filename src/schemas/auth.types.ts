import type { ReactNode, ElementType } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { z } from "zod";

import type { LoginSchema, RegisterSchema, VerifySchema } from "./auth.schema";

export const GENDER = {
  MALE: 0,
  FEMALE: 1,
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export const GENDER_OPTIONS = [
  {
    value: GENDER.MALE,
    labelKey: "gender.male",
  },
  {
    value: GENDER.FEMALE,
    labelKey: "gender.female",
  },
] as const;

export type LoginFormData = z.infer<ReturnType<typeof LoginSchema>>;

export type RegisterFormData = z.infer<ReturnType<typeof RegisterSchema>>;

export type VerifyFormData = z.infer<ReturnType<typeof VerifySchema>>;

export type PasswordName = "password" | "confirmPassword";

export type AuthFormFieldProps = {
  id: string;
  label: string;
  icon: ElementType;
  children: ReactNode;
};

export type AuthPasswordFieldProps = {
  id: PasswordName;
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  invalid: boolean;
  visible: boolean;
  showLabel: string;
  hideLabel: string;
  onToggle: () => void;
};

export const LOGIN_DEFAULT_VALUES: LoginFormData = {
  email: "",
  password: "",
  remember: false,
};

export const REGISTER_DEFAULT_VALUES: RegisterFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: GENDER.MALE,
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};
