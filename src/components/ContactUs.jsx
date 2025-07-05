import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        address: "",
        message: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: integrate with backend API or service
        console.log("Form submitted:", formData);
        // reset
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "",
            address: "",
            message: "",
            consent: false,
        });
    };

    return (
        <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-12" style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        required
                        className="w-full p-4 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none"
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about how you want to make a difference"
                    rows={5}
                    required
                    className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none"
                />

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-3 text-gray-700">
                        I agree to the terms and conditions.
                    </label>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition"
                    >
                        SEND
                    </button>
                </div>
            </form>
        </section>
    );
}
