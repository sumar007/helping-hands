import React, { useState } from "react";

const DonationForm = () => {
    const [amount, setAmount] = useState(100);
    const [frequency, setFrequency] = useState("ONETIME");
    const [focus, setFocus] = useState("Greatest Need");

    const handleAmountClick = (value) => setAmount(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ frequency, amount, focus });
        // Perform payment / API action here
    };

    return (
        <div className="max-w-5xl mx-auto p-6 grid lg:grid-cols-2 gap-10">
            {/* Left Image/Info */}
            <div className="rounded-xl shadow-md overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop"
                    alt="Donation"
                    className="w-full h-auto object-cover rounded-xl"
                />
                <div className="p-4 space-y-2 text-[#1d2936] text-sm">
                    <p>🟡 Use Charity Navigator’s Giving Calculator to find out the net cost of a donation and the tax savings.</p>
                    <p>🟡 To learn more, visit IRS.gov to review Publication 526: Charitable Contributions.</p>
                </div>
            </div>

            {/* Right Donation Form */}
            <div className="shadow-lg p-6 rounded-lg bg-white">
                <h2 className="text-center text-xl font-bold text-[#1d2936] uppercase mb-1">
                    Choose Amount
                </h2>
                <p className="text-center text-sm text-gray-500 mb-4">
                    Join Us in Making a Change
                </p>

                {/* Frequency Selector */}
                <div className="flex justify-center gap-2 mb-4 flex-wrap">
                    {["ONETIME", "MONTHLY", "QUARTERLY", "ANNUALLY"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFrequency(item)}
                            className={`px-4 py-2 border rounded-full text-sm font-semibold uppercase transition-all ${frequency === item
                                    ? "bg-yellow-400 text-white"
                                    : "border-yellow-400 text-[#1d2936]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Predefined Amounts */}
                <div className="flex justify-center gap-4 mb-4">
                    {[100, 500, 1000].map((val) => (
                        <button
                            key={val}
                            onClick={() => handleAmountClick(val)}
                            className={`px-6 py-2 border-2 rounded-full font-medium transition ${amount === val
                                    ? "bg-yellow-400 text-white border-yellow-400"
                                    : "border-yellow-400 text-yellow-500"
                                }`}
                        >
                            ${val}
                        </button>
                    ))}
                </div>

                {/* Custom Amount Input */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-600">Enter Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border p-3 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                    />
                </div>

                {/* Donation Focus Select */}
                <div className="mb-6">
                    <label className="block mb-1 text-sm text-gray-600">Select Donation Focus</label>
                    <select
                        value={focus}
                        onChange={(e) => setFocus(e.target.value)}
                        className="w-full border p-3 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        <option>Greatest Need</option>
                        <option>Education</option>
                        <option>Healthcare</option>
                        <option>Food Support</option>
                        <option>Water Projects</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#1d2936] text-white py-3 rounded-full font-semibold tracking-widest hover:bg-yellow-500 hover:text-black transition"
                >
                    NEXT
                </button>
            </div>
        </div>
    );
};

export default DonationForm;
