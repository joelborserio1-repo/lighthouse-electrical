"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Reveal from "./motion/Reveal";
import { PhoneIcon } from "./Icons";

const PHONE = "0451 020 862";
const PHONE_HREF = "tel:+61451020862";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", required: true, autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone Number", type: "tel", required: false, autoComplete: "tel" },
  { name: "message", label: "How can we help?", type: "textarea", required: true },
];

function validateField(name, value) {
  const v = value.trim();
  if (name === "name") return v ? "" : "Please enter your name.";
  if (name === "email") {
    if (!v) return "Please enter your email.";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.";
  }
  if (name === "message") return v ? "" : "Tell us a little about the job.";
  return "";
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const setField = (name, value) => setValues((s) => ({ ...s, [name]: value }));

  // Validate on blur (not per keystroke) per UX guidance.
  const handleBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validateField(name, values[name]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    FIELDS.forEach((f) => {
      const msg = validateField(f.name, values[f.name]);
      if (msg) nextErrors[f.name] = msg;
    });
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to first invalid field (accessibility).
      const first = FIELDS.find((f) => nextErrors[f.name]);
      if (first) document.getElementById(`qf-${first.name}`)?.focus();
      return;
    }

    setStatus("submitting");
    // NOTE: front-end only. Wire this to the real quote endpoint / email handler.
    // No backend exists in this repo yet — flagging rather than inventing one.
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__overlay" aria-hidden="true" />

      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title contact__title">
            Need An Electrician You Can Actually Rely On?
          </h2>
          <p className="contact__lede">
            Whether it&rsquo;s a small job or a large-scale project, we&rsquo;re here
            to help. Get in touch for a free, no-obligation quote.
          </p>
          <a href={PHONE_HREF} className="contact__phone">
            <PhoneIcon width={20} height={20} />
            {PHONE}
          </a>
        </Reveal>

        <Reveal className="contact__panel" y={32} delay={0.1}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className="contact__success"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
              >
                <motion.svg
                  viewBox="0 0 52 52"
                  className="contact__check"
                  aria-hidden="true"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.5 }}
                  />
                  <motion.path
                    d="M16 27l7 7 13-15"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.4 }}
                  />
                </motion.svg>
                <h3 className="contact__success-title">Request received</h3>
                <p className="contact__success-body">
                  Thanks{values.name ? `, ${values.name.trim().split(" ")[0]}` : ""}.
                  We&rsquo;ll be in touch shortly to talk through your project.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="qform"
                onSubmit={handleSubmit}
                noValidate
                initial={false}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              >
                <h3 className="qform__title">Request a Quote</h3>

                {FIELDS.map((f) => {
                  const err = touched[f.name] && errors[f.name];
                  const id = `qf-${f.name}`;
                  return (
                    <div className="qform__row" key={f.name}>
                      <label htmlFor={id} className="qform__label">
                        {f.label}
                        {f.required && <span aria-hidden="true"> *</span>}
                      </label>
                      {f.type === "textarea" ? (
                        <textarea
                          id={id}
                          name={f.name}
                          rows={4}
                          className={`qform__input ${err ? "qform__input--error" : ""}`}
                          value={values[f.name]}
                          onChange={(e) => setField(f.name, e.target.value)}
                          onBlur={() => handleBlur(f.name)}
                          aria-required={f.required}
                          aria-invalid={!!err}
                          aria-describedby={err ? `${id}-err` : undefined}
                        />
                      ) : (
                        <input
                          id={id}
                          name={f.name}
                          type={f.type}
                          autoComplete={f.autoComplete}
                          className={`qform__input ${err ? "qform__input--error" : ""}`}
                          value={values[f.name]}
                          onChange={(e) => setField(f.name, e.target.value)}
                          onBlur={() => handleBlur(f.name)}
                          aria-required={f.required}
                          aria-invalid={!!err}
                          aria-describedby={err ? `${id}-err` : undefined}
                        />
                      )}
                      {err && (
                        <span id={`${id}-err`} className="qform__err" role="alert">
                          {errors[f.name]}
                        </span>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="btn btn-primary qform__submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Request a Quote"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
