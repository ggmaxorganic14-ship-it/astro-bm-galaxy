import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre as BMs.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
  >
    <MessageCircle size={28} fill="white" strokeWidth={0} />
  </a>
);

export default WhatsAppButton;
