import type { Metadata } from "next";
import ContactSection from "../../components/pages/ContactSection";
import FAQSection from "../../components/pages/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us - Wheelot",
  description:
    "Get in touch with the Wheelot team for inquiries, vehicle listings, pricing, and support. We are here to help you find or sell your dream vehicle.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-4 sm:pt-8">
      <ContactSection />
      <FAQSection hideDescription={true} />
    </main>
  );
}
