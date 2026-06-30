import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';

const admissionSteps = [
  {
    icon: FileText,
    title: 'Application',
    description: 'Submit your application with basic information',
  },
  {
    icon: CheckCircle,
    title: 'Document Verification',
    description: 'Verify birth certificate, transfer certificate, and Aadhar',
  },
  {
    icon: Users,
    title: 'Assessment',
    description: 'Participate in our evaluation process',
  },
  {
    icon: CheckCircle,
    title: 'Confirmation',
    description: 'Receive admission confirmation and enrollment details',
  },
];

const documents = [
  'Birth Certificate (Original & Copy)',
  'Transfer Certificate (from previous school)',
  'Aadhar Card (Student & Parent)',
  'Passport Size Photos (4 copies)',
  'Previous Academic Records & Report Cards',
];

export const Admissions3D = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', right: '5%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-4">
            ADMISSIONS 2026-27
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              Join Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Academic Community
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              <Calendar className="inline-block w-6 h-6 text-gold mr-2" />
              Important Dates
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Application Start', date: 'March 25, 2026' },
                { label: 'Application Deadline', date: 'March 30, 2026' },
                { label: 'Assessment Period', date: 'March 25-30, 2026' },
                { label: 'Session Starts', date: 'June 1, 2026' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-4 rounded-lg border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-gold/60 transition-all duration-300"
                >
                  <p className="text-gold font-semibold">{item.label}</p>
                  <p className="text-gray-300 text-sm mt-1">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documents Required */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              <FileText className="inline-block w-6 h-6 text-gold mr-2" />
              Documents Required
            </h3>
            <div className="space-y-3">
              {documents.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 p-3 rounded-lg border border-gold/20 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl hover:border-gold/40 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Admission Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Admission Process
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-lg font-bold text-white mb-2">{step.title}</p>
                  <p className="text-sm text-gray-400">{step.description}</p>
                  {i < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-1 bg-gradient-to-r from-gold to-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Ready to apply? Start your journey with us today!</p>
          <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
