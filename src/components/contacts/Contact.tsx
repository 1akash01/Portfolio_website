import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'invalid'>('idle');
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // 1. ADVANCED VALIDATION
    if (name.trim().length < 3) {
      setStatus('invalid');
      setErrorMsg("Please enter a valid name (min 3 characters).");
      return;
    }

    if (!validateEmail(email)) {
      setStatus('invalid');
      setErrorMsg("Please enter a professional email address.");
      return;
    }

    if (message.trim().length < 10) {
      setStatus('invalid');
      setErrorMsg("Message is too short. Please provide more detail.");
      return;
    }

    setIsSubmitting(true);
    formData.append("access_key", "7f45a499-c288-4657-9355-1d586d1adbf9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 transition-colors duration-500">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center text-slate-900 dark:text-white">
          <span className="text-indigo-600 dark:text-indigo-400 mr-2 font-mono text-xl">04.</span> Get In Touch
        </h2>
        
        {/* DYNAMIC STATUS MESSAGE */}
        <div className="h-6"> 
          {status === 'success' && <p className="text-green-600 font-medium">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 font-medium">Server error. Try again later.</p>}
          {status === 'invalid' && (
            <p className="text-amber-600 font-medium flex items-center justify-center gap-2">
              <AlertCircle size={16} /> {errorMsg}
            </p>
          )}
          {status === 'idle' && (
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Drop a message!
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400"><Mail size={24} /></div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
              <p className="text-slate-600 dark:text-slate-400">at9877617@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400"><MapPin size={24} /></div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
              <p className="text-slate-600 dark:text-slate-400">Mansa, Punjab</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4"
          noValidate // We handle validation manually for better UI
        >
          <input 
            type="text" name="name" placeholder="Full Name" required
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
          <input 
            type="email" name="email" placeholder="professional@email.com" required
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
          <textarea 
            name="message" rows={4} placeholder="How can I help you?" required
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-400"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] text-white ${
              status === 'success' ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
            } ${status === 'invalid' ? 'ring-2 ring-amber-500' : ''}`}
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : status === 'success' ? 'Sent!' : 'Send Message'}
            {!isSubmitting && status !== 'success' && <Send size={18} />}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
