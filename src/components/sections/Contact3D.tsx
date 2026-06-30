import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact3D = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 612 012 3456',
      subtext: 'Admissions: +91 612 012 3457',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@drzakirschool.edu',
      subtext: 'Admissions: admissions@drzakirschool.edu',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Patna, Bihar, India',
      subtext: 'Dr. Zakir Hussain Middle School',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon-Fri: 8:00 AM - 3:00 PM',
      subtext: 'Sat: 8:00 AM - 1:00 PM',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
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
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Us Today
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our admissions team.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
                <info.icon className="w-8 h-8 text-gold mb-3" />
                <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                <p className="text-white font-semibold">{info.value}</p>
                <p className="text-xs text-gray-500 mt-2">{info.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-gold/20 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-gold/20 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-gold/20 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    '50 years of educational excellence and legacy',
                    '98.72% CBSE results with consistent performance',
                    '25:1 student-teacher ratio for personalized attention',
                    'State-of-the-art facilities and digital learning',
                    'Holistic development with sports, arts, and music',
                    'Safe, secure, and nurturing campus environment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-gold font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
