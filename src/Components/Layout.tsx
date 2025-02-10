function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-general-sans bg-[#F5F5F5] flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
