import { ReactNode } from "react";
import { Header } from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: LayoutProps) => {
  return (
    <>
      <Header title="My App Dashboard" />
      <main className="pt-24">{children}</main> 
    </>
  );
};
