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

    // Configurações do EmailJS - substitua pelas suas credenciais
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      // Validação das variáveis de ambiente
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configurações do EmailJS não encontradas. Verifique as variáveis de ambiente.");
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString('pt-BR'),
        },
        publicKey
      );

      // Verifica se o envio foi bem-sucedido
      if (result.status !== 200) {
        throw new Error(`Erro ao enviar: Status ${result.status}`);
      }

      setLoading(false);
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setOpen(false);
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      setLoading(false);
      
      // Mensagens de erro mais específicas
      let errorMessage = "Erro ao enviar mensagem. ";
      
      if (error?.text) {
        errorMessage += `Detalhes: ${error.text}`;
      } else if (error?.message) {
        errorMessage += `Erro: ${error.message}`;
      } else {
        errorMessage += "Verifique as configurações e tente novamente.";
      }
      
      errorMessage += "\n\nSe o problema persistir, entre em contato pelo WhatsApp.";
      
      alert(errorMessage);
      
      // Log detalhado no console para debug
      console.error("EmailJS Error Details:", {
        serviceId: serviceId,
        templateId: templateId,
        hasPublicKey: !!publicKey,
        error: error
      });
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

