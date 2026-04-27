import PageLoader from "@/components/PageLoader";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <PageLoader>
    <div
      className="pt-20 min-h-screen"
      style={{ background: "var(--gradient-soft)" }}
    >
      <ContactSection />
    </div>
  </PageLoader>
);

export default Contact;
