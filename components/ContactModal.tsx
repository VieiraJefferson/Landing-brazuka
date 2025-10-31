"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function ContactModal({ open, setOpen }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Configurações do EmailJS - substitua pelas suas credenciais
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Se não tiver variáveis de ambiente, use valores diretos (menos seguro, mas funciona)
      const SERVICE_ID = serviceId || "YOUR_SERVICE_ID";
      const TEMPLATE_ID = templateId || "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY = publicKey || "YOUR_PUBLIC_KEY";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setLoading(false);
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setOpen(false);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      alert("Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#151513] border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle>Enviar e-mail</DialogTitle>
          <DialogDescription className="text-white/60">
            Preencha o formulário e retornarei o mais breve possível.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <Input
            placeholder="Seu nome"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Input
            placeholder="Seu e-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
          <Textarea
            placeholder="Escreva sua mensagem..."
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-28 resize-none"
          />

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-[#FD2163] hover:bg-[#e31a57]"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

