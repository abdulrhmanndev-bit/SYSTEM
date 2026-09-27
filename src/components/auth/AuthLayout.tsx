import AuthVisual from "./AuthVisual";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-dvh w-full lg:grid-cols-[2fr_1fr]">
      {/* Left */}
      <section className="flex min-h-dvh items-center justify-center bg-background-page px-6 py-12">
        {children}
      </section>

      {/* Right */}
      <AuthVisual />
    </div>
  );
}
