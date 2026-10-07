import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

export default function page() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
