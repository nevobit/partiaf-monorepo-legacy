import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
}
