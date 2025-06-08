import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  CreditCard,
} from "lucide-react";

const enquiryOptions = [
  "General Enquiry",
  "Corporate/Social Partnership",
  "Press Enquiry",
  "Donor / Volunteer Enquiry",
  "Employment Enquiry",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    enquiry: enquiryOptions[0],
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    attachment: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // hook up to your API / EmailJS here
  };

  return (
    <div className="max-w-6xl mx-auto bg-[#d6a86c] rounded-xl p-6 md:p-10 my-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* ——— Left: Form ——— */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-6"
          encType="multipart/form-data"
        >
          {/* Enquiry Type */}
          <div className="flex flex-wrap gap-4 mb-4">
            {enquiryOptions.map((opt) => (
              <label key={opt} className="inline-flex items-center">
                <input
                  type="radio"
                  name="enquiry"
                  value={opt}
                  checked={formData.enquiry === opt}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2 text-sm font-medium">{opt}</span>
              </label>
            ))}
          </div>

          {/* Two-Column Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-sm mb-1">
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">
                Email ID<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">
                Your Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">
                City/Region
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">
                Phone<span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">
                Attachment file (Max 10MB)
              </label>
              <input
                type="file"
                name="attachment"
                accept="*"
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-2 rounded-full transition"
            >
              SUBMIT
            </button>
          </div>
        </form>

        {/* ——— Right: Info & Map ——— */}
        <div className="space-y-6 text-gray-800">
          {/* Contact Details */}
          <h3 className="text-2xl font-bold">Helping Hand India NGO</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <span>
                Kakrola, Near Dwarka Mor Metro Station, New Delhi –110078
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-gray-600" />
              <span>+91-11-9990773454, 9582291326</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gray-600" />
              <span>office@helpinghandindiango.org</span>
            </div>
            <div className="flex items-center">
              <LinkIcon className="w-5 h-5 mr-2 text-gray-600" />
              <a
                href="https://www.helpinghandindiango.org"
                className="underline hover:text-gray-700"
              >
                www.helpinghandindiango.org
              </a>
            </div>
          </div>

          {/* Bank Details */}
          <div className="text-sm">
            <h4 className="font-semibold mb-2">Bank Account Details</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <CreditCard className="inline-block w-4 h-4 mr-1" />
                <strong>Union Bank of India</strong> – A/c: 520101243871860,
                IFSC: UBIN0904767, MICR: 110026334 (Paschim Vihar, Delhi-63)
              </li>
              <li>
                <CreditCard className="inline-block w-4 h-4 mr-1" />
                <strong>Yes Bank</strong> – A/c: 063694600000034, IFSC: YESB0000636,
                MICR: 110532118 (Paschim Vihar, Delhi-63)
              </li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Helping Hand India Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1234567890123!2d77.05012345678901!3d28.606789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037123456789%3A0xabcdef1234567890!2sHelping%20Hands%20NGO!5e0!3m2!1sen!2sin!4v1612345678901"
              width="100%"
              height="250"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
