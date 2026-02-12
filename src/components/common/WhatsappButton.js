"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="91921933592"   // ⚠️ must include country code
      accountName="Kripa Financial Solutions"
      chatMessage="Hi 👋 How can we help you?"
      avatar="/images/kripalogo.svg"
      buttonStyle={{
        width: "50px",
        height: "50px",
        bottom: "70px",   // move up
        right: "24px",
      }}
    />
  );
}