import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7f45a499-c288-4657-9355-1d586d1adbf9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);

      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center text-white">
          <span className="text-indigo-500 mr-2 font-mono text-xl">04.</span> Get In Touch
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          {status === 'success' ? "Message sent successfully! I'll get back to you soon." : 
           status === 'error' ? "Something went wrong. Please try again." : 
           "I'm currently looking for new opportunities. Drop a message!"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-white">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400"><Mail size={24} /></div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-400">at9877617@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400"><MapPin size={24} /></div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-gray-400">Mansa, Punjab</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Name" required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <input type="email" name="email" placeholder="example@gmail.com" required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <textarea name="message" rows={4} placeholder="Message" required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
              status === 'success' ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : status === 'success' ? 'Sent!' : 'Send Message'}
            {!isSubmitting && status !== 'success' && <Send size={18} />}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
