import React from "react";

const EmployerMatch = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-[#1f2c3c] mb-3">
                Does your employer match?
            </h2>

            {/* Yellow line below heading */}
            <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

            <p className="text-gray-700 mb-4">
                Charity Navigator is a nonprofit, 501(c) 3 organization that provides a free, online roadmap to intelligent giving by offering millions of donors a reliable place to go for unbiased assessments of and deep insights into operational best practices of nonprofit organizations throughout America.
            </p>

            <p className="text-gray-700 mb-8">
                Please click on the link below to see if your employer matches donations and follow the process to maximize your donation.
            </p>

            <a
                href="https://www.charitynavigator.org/donor-basics/giving-101/employee-match-programs/?bay=content.view&cpid=1799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1f2c3c] text-[#0073e6] px-6 py-3 rounded-full font-semibold tracking-wide uppercase hover:bg-yellow-400 hover:text-black transition"
            >
                Go to the link
            </a>
        </div>
    );
};

export default EmployerMatch;
