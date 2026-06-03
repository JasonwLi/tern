import type { Metadata } from "next";
import AppDemo from "@/components/AppDemo";

// A recordable, interactive app mockup for marketing/UGC content.
// Not for indexing — it's a prop, not a real product page.
export const metadata: Metadata = {
  title: "Tern app demo",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <AppDemo />;
}
