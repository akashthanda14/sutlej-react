import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <section className="bg-[#10263a] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            GET IN <span className="text-[#fbca01]">TOUCH</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            id="contact-form"
            name="contact_form"
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#fbca01] transition-colors"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#fbca01] transition-colors"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="tel"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#fbca01] transition-colors"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                name="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#fbca01] transition-colors"
                placeholder="Your Message"
                required
              ></motion.textarea>
            </div>

            <input type="hidden" name="access_key" value="5a2441e2-c85c-4a55-90de-d7f1aadda869" />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-[#fbca01] text-[#10263a] font-semibold hover:bg-[#fbca01]/90 transition-colors"
            >
              Submit Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;