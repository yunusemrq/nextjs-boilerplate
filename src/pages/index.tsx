import { Page } from "@/components";
import { IModal } from "@/components/common";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false) as any;

  return (
    <Page className="flex" title="title">
      <div className="p-10"></div>
    </Page>
  );
}
