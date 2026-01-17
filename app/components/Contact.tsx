'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-cocoa-900/50 py-20">
            <div className="relative z-10 mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-6 font-display text-4xl text-gold-500 md:text-5xl">Get in Touch</h2>
                    <p className="text-cream-200/60 mx-auto max-w-2xl text-lg leading-relaxed">
                        Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/5 bg-cocoa-800/50 p-8 backdrop-blur-sm md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-cream-200/80 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-white/10 bg-cocoa-900/50 px-4 py-3 text-cream-50 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-cream-200/80 text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-white/10 bg-cocoa-900/50 px-4 py-3 text-cream-50 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-cream-200/80 text-sm">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-white/10 bg-cocoa-900/50 px-4 py-3 text-cream-50 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-cream-200/80 text-sm">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full resize-none rounded-lg border border-white/10 bg-cocoa-900/50 px-4 py-3 text-cream-50 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 py-4 font-bold text-cocoa-900 transition-all hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {status === 'loading' ? (
                                <FaSpinner className="animate-spin text-xl" />
                            ) : status === 'success' ? (
                                <span>Message Sent!</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>

                        {status === 'error' && <p className="text-center text-sm text-red-400">{errorMessage}</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
