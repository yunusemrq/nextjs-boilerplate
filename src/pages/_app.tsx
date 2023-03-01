import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sidebar } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}
