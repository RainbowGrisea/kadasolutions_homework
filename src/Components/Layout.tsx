function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F5F5F5] flex flex-col items-center min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
