import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Integrate with backend API or third-party service like EmailJS or Formspree
    };

    return (
        <div className="max-w-5xl mx-auto bg-[#1f2c3c] text-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-2">Get in touch with us:</h2>
            <p className="mb-6">
                If you would like to learn more about Lillah Services or are interested in getting
                involved, <strong>please write to us.</strong>
            </p>

            <div className="bg-[#582b35] text-white py-2 px-4 rounded-md mb-6 w-fit">
                Note: "*" fields are mandatory
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Top Row */}
                <div className="grid md:grid-cols-4 gap-4">
                    <div>
                        <label className="block mb-1 font-medium text-sm">
                            First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded border border-yellow-400 text-black"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">
                            Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded border border-yellow-400 text-black"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">
                            Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded border border-yellow-400 text-black"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-yellow-400 text-black"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block mb-1 font-medium text-sm">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded border border-yellow-400 text-black"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-black hover:bg-yellow-500 hover:text-black text-white px-6 py-3 rounded-full transition font-medium"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
