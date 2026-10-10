import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 font-mono">
        <div className="flex justify-center">
          <div className="p-4 bg-yellow-500/10 rounded-full border border-yellow-500/30">
            <CheckCircle2 className="w-12 h-12 text-yellow-500" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-yellow-500 text-sm">
            <span className="text-gray-600">$</span> ./message-delivered
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Message Sent ✓
          </h1>
          <p className="text-gray-400">
            Thanks for reaching out! I&apos;ve received your message and will
            reply within 24 hours.
          </p>
        </div>

        <Link href="/">
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-mono font-semibold rounded-none px-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> ./back-home
          </Button>
        </Link>
      </div>
    </main>
  );
}
