import { motion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Mail, 
  Phone,
  MapPin,
  ArrowRight,
  Download,
  Users,
  BookOpen
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const steps = [
  { number: '01', title: 'Registration', description: 'Fill out the online registration form with student details.', icon: FileText },
  { number: '02', title: 'Document Verification', description: 'Submit required documents for verification.', icon: CheckCircle },
  { number: '03', title: 'Interaction/Assessment', description: 'Student interaction and academic assessment.', icon: Calendar },
  { number: '04', title: 'Admission Confirmation', description: 'Fee payment and seat confirmation.', icon: Clock },
];

const importantDates = [
  { label: 'Application Start', date: 'Jan 15, 2026' },
  { label: 'Application Deadline', date: 'Mar 15, 2026' },
  { label: 'Assessment', date: 'Mar 20-25, 2026' },
  { label: 'Results', date: 'Apr 1, 2026' },
];

const documents = [
  'Birth Certificate',
  'Transfer Certificate',
  'Aadhar Card (Student & Parent)',
  'Passport Size Photos (4)',
  'Previous Academic Records',
];

export function Admissions() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="admissions" className="relative px-4 py-20 sm:px-6 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-amber-400/90 uppercase">
            Admissions 2026-27
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Join Our{' '}
            <span className="text-gold-gradient">Family</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300/75">
            Admissions open for classes Pre-Primary to 8th. Limited seats available.
          </p>
        </motion.div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-white">
            Admission Process
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="glass-strong relative rounded-3xl p-6 text-center transition-all duration-300"
                >
                  <div className="absolute -top-3 right-4 text-5xl font-display font-bold text-amber-500/10">
                    {step.number}
                  </div>
                  <div className="mb-4 inline-flex rounded-xl bg-amber-500/10 p-3">
                    <Icon className="size-6 text-amber-400" />
                  </div>
                  <h4 className="mb-2 font-display text-lg font-semibold text-white">{step.title}</h4>
                  <p className="text-sm text-slate-300/70">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong rounded-3xl p-8"
          >
            <Calendar className="mb-4 size-8 text-amber-400" />
            <h4 className="mb-2 font-display text-lg font-semibold text-white">Important Dates</h4>
            <ul className="space-y-2 text-sm text-slate-300/70">
              {importantDates.map((item) => (
                <li key={item.label} className="flex justify-between">
                  <span>{item.label}</span>
                  <span className="text-white">{item.date}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8"
          >
            <FileText className="mb-4 size-8 text-amber-400" />
            <h4 className="mb-2 font-display text-lg font-semibold text-white">Required Documents</h4>
            <ul className="space-y-2 text-sm text-slate-300/70">
              {documents.map((doc) => (
                <li key={doc}>• {doc}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-strong rounded-3xl p-8"
          >
            <MapPin className="mb-4 size-8 text-amber-400" />
            <h4 className="mb-2 font-display text-lg font-semibold text-white">Contact Us</h4>
            <p className="text-sm text-slate-300/70">
              For admission inquiries, please contact our admission office:
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-amber-400" />
                <a href="tel:+1234567890" className="text-white hover:text-amber-400 transition">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-amber-400" />
                <a href="mailto:admissions@drzakirschool.edu" className="text-white hover:text-amber-400 transition">
                  admissions@drzakirschool.edu
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-400 transition hover:gap-2"
            >
              More details
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(120deg,#f4d694,#d49a4b)] px-8 py-4 text-sm font-bold text-[#1a1304] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/25"
          >
            <Download className="size-5" />
            Download Admission Form
          </a>
        </motion.div>
      </div>
    </section>
  );
}