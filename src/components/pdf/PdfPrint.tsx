"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import PdfDocument from "./PdfDocument";

type Props = {
  children: ReactNode;
};

const PdfPreview = dynamic(
  () => import("./PdfDocument").then((mod) => mod.PdfPreview),
  { ssr: false },
);

const downloadClass =
  "inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover";

export function PdfPrint({ children }: Props) {
  const [open, setOpen] = useState(false);

  const pdf = <PdfDocument>{children}</PdfDocument>;

  const printPdf = (url: string | null) => {
    if (!url) return;

    const iframe = document.createElement("iframe");

    Object.assign(iframe.style, {
      position: "fixed",
      width: "0",
      height: "0",
      border: "0",
      visibility: "hidden",
    });

    iframe.src = url;
    document.body.appendChild(iframe);

    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();

      setTimeout(() => iframe.remove(), 1000);
    };
  };

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        View PDF
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent size="full" className="gap-4">
          <DialogHeader className="flex-row flex-wrap items-center justify-between gap-3 pe-8">
            <DialogTitle>PDF Preview</DialogTitle>

            <div className="flex flex-wrap gap-2">
              <BlobProvider document={pdf}>
                {({ url, loading, error }) => (
                  <Button
                    type="button"
                    disabled={loading || !url || !!error}
                    onClick={() => printPdf(url)}
                  >
                    {loading ? "Preparing..." : "Print"}
                  </Button>
                )}
              </BlobProvider>

              <PDFDownloadLink
                document={pdf}
                fileName="Askanet-Transportation.pdf"
                className={downloadClass}
              >
                {({ loading }) => (loading ? "Preparing..." : "Download")}
              </PDFDownloadLink>
            </div>
          </DialogHeader>

          <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-border bg-surface-subtle">
            <PdfPreview>{children}</PdfPreview>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
