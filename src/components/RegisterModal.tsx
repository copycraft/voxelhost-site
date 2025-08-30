import React, { useState } from "react";
import { X, User, Mail, Lock } from "lucide-react";

const RegisterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Regisztrációs adatok:", form);
        onClose(); // bezárás a submit után
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md bg-gray-800 rounded-3xl p-8 shadow-2xl border border-green-700/30">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                    Regisztráció
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <User className="absolute top-1/2 left-3 -translate-y-1/2 text-green-400 w-5 h-5" />
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Felhasználónév"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 border border-green-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-green-400 w-5 h-5" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email cím"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 border border-green-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute top-1/2 left-3 -translate-y-1/2 text-green-400 w-5 h-5" />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Jelszó"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 border border-green-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        Regisztráció
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
