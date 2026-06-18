import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function Contact() {
  const reduceMotion = usePrefersReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-slate-200/90 uppercase">
            get in touch
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Let's create something{' '}
            <span className="text-gold-gradient">extraordinary</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300/75">
            Ready to elevate your digital presence? We'd love to hear about your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="mb-6 font-display text-2xl font-semibold text-white">
                Connect with us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-gold-gradient" />
                  <div>
                    <p className="text-sm font-medium text-slate-300/60">Email</p>
                    <a href="mailto:hello@yourstudio.com" className="text-white transition hover:text-gold-gradient">
                      hello@yourstudio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-gold-gradient" />
                  <div>
                    <p className="text-sm font-medium text-slate-300/60">Phone</p>
                    <a href="tel:+1234567890" className="text-white transition hover:text-gold-gradient">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-gold-gradient" />
                  <div>
                    <p className="text-sm font-medium text-slate-300/60">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="glass-strong rounded-3xl p-8">
              <h4 className="mb-4 font-display text-lg font-semibold text-white">
                Working Hours
              </h4>
              <div className="space-y-2 text-sm text-slate-300/75">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8">
              <div className="mb-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-300/40 transition focus:border-gold-gradient/50 focus:outline-none focus:ring-2 focus:ring-gold-gradient/20"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-300/40 transition focus:border-gold-gradient/50 focus:outline-none focus:ring-2 focus:ring-gold-gradient/20"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-300/40 transition focus:border-gold-gradient/50 focus:outline-none focus:ring-2 focus:ring-gold-gradient/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="relative w-full overflow-hidden rounded-xl bg-[linear-gradient(120deg,#f4d694,#d49a4b)] px-6 py-4 text-sm font-bold text-[#1a1304] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="size-5" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="size-4" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
