import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You | DermaGlow Studio",
  description:
    "Thank you for contacting DermaGlow Studio. Our team will get in touch with you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouPage />;
}
