"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/env";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck?: string; // Honeypot field for spam protection
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.botcheck) {
      setStatus("success");
      return;
    }
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please email me directly at arieljulytraje@gmail.com",
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData(initialFormData);
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please email me directly at arieljulytraje@gmail.com",
      );
      console.error("Contact form error:", error);
    }
  };

  return (
    <div className="bg-[#111111] p-6 md:p-8 rounded-lg border border-yellow-500/20">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs font-mono text-gray-500">
          new_message.sh
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 font-mono" noValidate>
        <input
          type="text"
          name="botcheck"
          value={formData.botcheck}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs text-yellow-500">
              $ name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              disabled={status === "loading"}
              className="bg-black border-gray-800 focus:border-yellow-500 focus:ring-yellow-500 rounded-none text-white placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs text-yellow-500">
              $ email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              disabled={status === "loading"}
              className="bg-black border-gray-800 focus:border-yellow-500 focus:ring-yellow-500 rounded-none text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs text-yellow-500">
            $ subject <span className="text-red-500">*</span>
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            disabled={status === "loading"}
            className="bg-black border-gray-800 focus:border-yellow-500 focus:ring-yellow-500 rounded-none text-white placeholder:text-gray-600"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs text-yellow-500">
            $ message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            disabled={status === "loading"}
            className="min-h-[140px] bg-black border-gray-800 focus:border-yellow-500 focus:ring-yellow-500 rounded-none text-white placeholder:text-gray-600 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-mono font-bold py-6 rounded-none text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "idle" && (
            <>
              <Send className="mr-2 w-4 h-4" /> ./send-message
            </>
          )}
          {status === "loading" && (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" /> ./sending...
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="mr-2 w-4 h-4" /> ./message-sent
            </>
          )}
          {status === "error" && (
            <>
              <Send className="mr-2 w-4 h-4" /> ./retry-send
            </>
          )}
        </Button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded text-xs text-green-400"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>
                Message sent! I&apos;ll reply within 24 hours. Check your inbox
                for a confirmation.
              </span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded text-xs text-red-400"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[10px] text-gray-600 text-center pt-2">
          <span className="text-yellow-500">$</span> powered by web3forms ·
          end-to-end encrypted
        </p>
      </form>
    </div>
  );
}
