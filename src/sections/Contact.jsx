import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    return (
        <section id="contact" className="flex-center section-padding relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full h-full md:px-10 px-5 relative z-10">
                <TitleHeader
                    title="Một cái chạm - Liên hệ với chúng tôi"
                    sub="💬 Có câu hỏi hoặc ý tưởng? Hãy nói chuyện nào! 🚀"
                />
                <div className="grid-12-cols mt-16 gap-8">
                    {/* Form Section */}
                    <div className="xl:col-span-5 xl:order-1 order-2">
                        <div className="contact-form-wrapper card-border rounded-2xl p-8 md:p-10 backdrop-blur-sm bg-black-100/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Gửi tin nhắn
                                </h3>
                                <p className="text-white-50 text-sm md:text-base">
                                    Điền thông tin bên dưới và tôi sẽ phản hồi sớm nhất có thể
                                </p>
                            </div>

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-6"
                            >
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Họ và tên
                                        <span className="text-red-400 ml-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Nguyễn Văn A"
                                        className="contact-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                        <span className="text-red-400 ml-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        className="contact-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        Tin nhắn
                                        <span className="text-red-400 ml-1">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Hãy chia sẻ ý tưởng của bạn..."
                                        rows="6"
                                        className="contact-textarea"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="contact-submit-btn"
                                >
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "ĐANG GỬI..." : "GỬI TIN NHẮN"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 3D Experience Section */}
                    <div className="xl:col-span-7 xl:order-2 order-1 min-h-[400px] md:min-h-[500px]">
                        <div className="contact-3d-wrapper relative w-full h-full rounded-3xl overflow-hidden group">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-white/10 group-hover:border-white/20 transition-colors duration-500" />

                            {/* 3D Content */}
                            <div className="relative w-full h-full hover:cursor-grab active:cursor-grabbing">
                                <ContactExperience />
                            </div>

                            {/* Info overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                                <p className="text-white text-sm md:text-base font-medium">
                                    🎨 Kéo để xoay mô hình 3D
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;