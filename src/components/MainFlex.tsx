type MainFlexProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function MainFlex({ children, className }: MainFlexProps) {
  return (
    <main
      className={`mx-auto w-full max-w-[94%] px-4 py-2 sm:max-w-[92%] sm:px-6 md:max-w-[90%] lg:max-w-[88%] lg:px-8 xl:max-w-[85%] 2xl:max-w-[80%] ${className}`}
    >
      {children}
    </main>
  );
}
