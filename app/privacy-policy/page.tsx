import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | DermaGlow Studio",
  description:
    "Read the DermaGlow Studio privacy policy and learn how information submitted through our website is collected, used, and protected.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
