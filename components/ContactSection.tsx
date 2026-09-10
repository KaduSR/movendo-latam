"use client";

import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  topic: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  message: "",
  topic: "",
  consent: false,
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = "checked" in target ? target.checked : false;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Informe seu telefone.";
    if (!form.company.trim()) nextErrors.company = "Informe sua empresa.";
    if (!form.topic) nextErrors.topic = "Escolha um assunto.";
    if (form.message.trim().length < 10) {
      nextErrors.message = "Conte um pouco mais sobre o que você precisa.";
    }
    if (!form.consent) nextErrors.consent = "Aceite os termos para continuar.";
    return nextErrors;
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name } = target;
    const nextErrors = validate();
    if (nextErrors[name]) {
      setErrors((current) => ({ ...current, [name]: nextErrors[name] }));
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setServerMessage("");
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        setServerMessage(data.message || "Não conseguimos enviar sua mensagem.");
        setStatus("error");
        return;
      }
      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch {
      setServerMessage("Verifique sua conexão e tente novamente.");
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="section section--contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow eyebrow--orange">Vamos conversar</div>
          <h2 id="contact-title">O que precisa mover na sua organização?</h2>
          <p>
            Conte o momento, os desafios e o que você gostaria de mudar.
            Em até 48h, alguém do nosso time entra em contato para entender o contexto
            e apontar um caminho — sem custo e sem compromisso.
          </p>
          <div className="contact-benefits">
            <div>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span><strong>Resposta humana</strong><small>Sem bots. Alguém do time analisa seu contexto.</small></span>
            </div>
            <div>
              <ShieldCheck size={20} aria-hidden="true" />
              <span><strong>Dados protegidos</strong><small>Usados apenas para este contato. Sem spam.</small></span>
            </div>
          </div>
          <a className="contact-mail" href="mailto:contato@movendolatam.com.br">
            contato@movendolatam.com.br <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-proof">
            <div className="contact-proof__item">
              <span className="contact-proof__number">15+</span>
              <span className="contact-proof__text">Organizações na Latam já se transformaram</span>
            </div>
            <div className="contact-proof__item">
              <span className="contact-proof__number">4.8</span>
              <span className="contact-proof__text">Satisfação média dos participantes</span>
            </div>
            <div className="contact-proof__item">
              <span className="contact-proof__number">6</span>
              <span className="contact-proof__text">Semanas para ver os primeiros sinais</span>
            </div>
          </div>
          <div className="contact-form-header">
            <span className="contact-form-index">01 / 01</span>
            <span className="contact-form-status">
              {status === "success" ? "Mensagem recebida" : "Vamos conversar"}
            </span>
          </div>
          {status === "success" ? (
            <div className="form-success" role="status">
              <span className="form-success__icon"><CheckCircle2 size={30} aria-hidden="true" /></span>
              <h3>Obrigado, {form.name.split(" ")[0]}!</h3>
              <p>Recebemos sua mensagem. Alguém do nosso time entra em contato em breve.</p>
              <button type="button" className="button-link button-link--outline" onClick={() => setStatus("idle")}>
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-error-summary" aria-live="polite" aria-atomic="true">
                {status === "error" && serverMessage && <p>{serverMessage}</p>}
              </div>
              <div className="form-row">
                <FormField label="Nome completo" name="name" value={form.name} onChange={update} onBlur={handleBlur} error={errors.name} autoComplete="name" />
                <FormField label="Empresa" name="company" value={form.company} onChange={update} onBlur={handleBlur} error={errors.company} autoComplete="organization" />
              </div>
              <div className="form-row">
                <FormField label="E-mail corporativo" name="email" type="email" value={form.email} onChange={update} onBlur={handleBlur} error={errors.email} autoComplete="email" />
                <FormField label="Telefone" name="phone" type="tel" value={form.phone} onChange={update} onBlur={handleBlur} error={errors.phone} autoComplete="tel" placeholder="+55" />
              </div>
              <div className="form-row">
                <FormField label="Cargo" name="role" value={form.role} onChange={update} onBlur={handleBlur} placeholder="Ex.: Diretora de People" />
                <label className="field">
                  <span>Assunto</span>
                  <select name="topic" value={form.topic} onChange={update} onBlur={handleBlur} aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? "topic-error" : undefined}>
                    <option value="">Selecione uma opção</option>
                    <option value="lideranca">Liderança</option>
                    <option value="equipes">Equipes</option>
                    <option value="cultura">Cultura organizacional</option>
                    <option value="outro">Outro</option>
                  </select>
                  {errors.topic && <small id="topic-error" className="field-error">{errors.topic}</small>}
                </label>
              </div>
              <label className="field">
                <span>Conte um pouco sobre o momento da sua organização</span>
                <textarea name="message" value={form.message} onChange={update} onBlur={handleBlur} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} rows={4} placeholder="O que você gostaria de desenvolver ou transformar?" />
                {errors.message && <small id="message-error" className="field-error">{errors.message}</small>}
              </label>
              <label className="consent-field">
                <input type="checkbox" name="consent" checked={form.consent} onChange={update} />
                <span>Eu aceito receber comunicações da Movendo Latam e concordo com a Política de Privacidade.</span>
              </label>
              {errors.consent && <small className="field-error consent-error">{errors.consent}</small>}
              <button className="submit-button" type="submit" disabled={status === "submitting"}>
                <Send size={17} aria-hidden="true" />
                {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
              </button>
              <p className="form-subtext">
                Sem compromisso. Respondemos em até 48h úteis.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && <small id={`${name}-error`} className="field-error">{error}</small>}
    </label>
  );
}
