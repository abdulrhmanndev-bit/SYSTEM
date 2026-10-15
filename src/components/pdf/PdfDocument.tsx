"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";
import { Document, Page } from "@react-pdf/renderer";

type Props = {
  children: ReactNode;
};

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false },
);

export function PdfDocument({ children }: Props) {
  return (
    <Document title="Askanet Transportation" author="Askanet Transportation">
      <Page size="A4">{children}</Page>
    </Document>
  );
}

export function PdfPreview({ children }: Props) {
  return (
    <PDFViewer width="100%" height="100%" showToolbar>
      <PdfDocument>{children}</PdfDocument>
    </PDFViewer>
  );
}

export default PdfDocument;
