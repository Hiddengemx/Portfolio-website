const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-slate-900 bg-zinc-100 bg-horizonAnimated bg-cover bg-scroll bg-center bg-no-repeat selection:bg-slate-900 selection:text-white">
      <div className="grid min-h-dvh grid-cols-1 place-content-center place-items-center gap-5">
        {children}
      </div>
    </div>
  );
};

export default Layout;
