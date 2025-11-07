import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9F2FF] via-[#BEE9FF] to-[#A5E0FF] -z-10" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Exclusive Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new
              products, special deals, and promotions
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 text-base"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600">
                Thank you for subscribing. Check your inbox for exclusive
                offers.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
