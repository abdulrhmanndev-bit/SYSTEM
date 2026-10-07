import { z } from "zod";

import { GENDER, type Gender } from "./auth.types";

type Translate = (key: string) => string;

const EMAIL_MAX_LENGTH = 254;
const NAME_MAX_LENGTH = 100;
const PASSWORD_MIN_LENGTH = 6;

const MINIMUM_AGE = 18;
const MINIMUM_BIRTH_YEAR = 1900;
const DEFAULT_BIRTH_AGE = 25;

const emailSchema = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("email.required"))
    .max(EMAIL_MAX_LENGTH, t("email.maxLength"))
    .email(t("email.invalid"));

const registerPasswordSchema = (t: Translate) =>
  z
    .string()
    .min(1, t("password.required"))
    .min(PASSWORD_MIN_LENGTH, t("password.minLength"))
    .refine(
      (password) => (password.match(/[A-Z]/g) ?? []).length >= 2,
      t("password.uppercase"),
    )
    .regex(/[^A-Za-z0-9]/, t("password.symbol"));

export const LoginSchema = (t: Translate) =>
  z.object({
    email: emailSchema(t),

    password: z.string().min(1, t("password.required")),

    remember: z.boolean(),
  });

export const RegisterSchema = (t: Translate) =>
  z
    .object({
      firstName: z
        .string()
        .trim()
        .min(1, t("firstName.required"))
        .max(NAME_MAX_LENGTH, t("firstName.maxLength")),

      lastName: z
        .string()
        .trim()
        .min(1, t("lastName.required"))
        .max(NAME_MAX_LENGTH, t("lastName.maxLength")),

      email: emailSchema(t),

      phone: z
        .string()
        .trim()
        .refine(
          (value) => !value || /^\+?[1-9]\d{7,14}$/.test(value),
          t("phone.invalid"),
        )
        .optional(),

      gender: z.union([z.literal(GENDER.MALE), z.literal(GENDER.FEMALE)]),

      dateOfBirth: z
        .string()
        .min(1, t("dateOfBirth.required"))
        .refine(isValidDate, t("dateOfBirth.invalid"))
        .refine(isAtLeast18, t("dateOfBirth.minAge")),

      password: registerPasswordSchema(t),

      confirmPassword: z.string().min(1, t("confirmPassword.required")),

      address: z
        .object({
          street: z.string().trim().optional(),
          city: z.string().trim().optional(),
          country: z.string().trim().optional(),
        })
        .optional(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      path: ["confirmPassword"],
      message: t("confirmPassword.mismatch"),
    });

export const VerifySchema = (t: Translate) =>
  z.object({
    token: z.string().trim().min(1, t("token.required")),
  });

export function parseGender(value: string): Gender {
  return value === String(GENDER.FEMALE) ? GENDER.FEMALE : GENDER.MALE;
}

export function formatDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function parseDate(value?: string): Date | undefined {
  if (!value || !isValidDate(value)) {
    return undefined;
  }

  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

export function getMinimumBirthDate(): Date {
  return new Date(MINIMUM_BIRTH_YEAR, 0, 1);
}

export function getMaximumBirthDate(): Date {
  return subtractYears(new Date(), MINIMUM_AGE);
}

export function getDefaultBirthMonth(): Date {
  return subtractYears(new Date(), DEFAULT_BIRTH_AGE);
}

function isValidDate(value: string): boolean {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return false;
  }

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function isAtLeast18(value: string): boolean {
  if (!isValidDate(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);

  const birthDate = new Date(year, month - 1, day);
  const maximumBirthDate = getMaximumBirthDate();

  birthDate.setHours(0, 0, 0, 0);

  return birthDate <= maximumBirthDate;
}

function subtractYears(date: Date, years: number): Date {
  const result = new Date(date);

  result.setHours(0, 0, 0, 0);
  result.setFullYear(result.getFullYear() - years);

  return result;
}
