'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if ALREADY logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/admin');
      }
    };
    checkSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success('Login successful');
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center p-4 selection:bg-[#C9A84C] selection:text-[#0D1B2A]">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0D1B2A',
            color: '#F5F0E8',
            borderRadius: '0px',
            fontSize: '14px',
            border: '1px solid rgba(201, 168, 76, 0.3)'
          }
        }} 
      />
      
      <motion.div 
        className="w-full max-w-md bg-white p-10 md:p-14 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 -rotate-45 translate-x-16 -translate-y-16" />
        
        <div className="relative z-10">
          <div className="flex justify-center flex-col items-center mb-10">
            <div className="w-12 h-1 bg-[#C9A84C] mb-6" />
            <h1 className="text-2xl md:text-3xl text-[#0D1B2A] mb-2 font-light tracking-tight text-center">Admin Portal</h1>
            <p className="text-sm text-[#0D1B2A]/50 font-light text-center">Restricted Access Area</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#F5F0E8]/50 border border-[#0D1B2A]/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#0D1B2A]/30 text-[#0D1B2A]"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#F5F0E8]/50 border border-[#0D1B2A]/10 px-6 py-4 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#0D1B2A]/30 text-[#0D1B2A]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#0D1B2A] text-[#F5F0E8] font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl relative overflow-hidden group/btn"
            >
              <span className="relative z-10">{loading ? 'Authenticating...' : 'Enter System'}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
