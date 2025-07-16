import PageHeader from "@/components/layout/pageHeader";
import PageFooter from "@/components/layout/pageFooter";
import ChatSection from "@/components/chat/chatSeccion";
import InfoGrid from "@/components/info/infoGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ChatSection />
        <InfoGrid />
      </div>
      <PageFooter />
    </main>
  );
}
