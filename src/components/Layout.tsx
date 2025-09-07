import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;