import Head from "next/head";
import React, { ReactNode } from "react";
import { Text } from "../common";

interface IPageProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export const Page = (props: IPageProps) => {
  const { title = "Başlık", className, children = <></> } = props;
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={className}>{children}</section>
    </React.Fragment>
  );
};