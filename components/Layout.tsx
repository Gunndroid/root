// components/Layout.tsx
import React, { SetStateAction } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-black font">
      <div className="sticky top-0 z-20 shadow-md">
        <Header
          setCurrentView={(value: SetStateAction<string>): void => {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
