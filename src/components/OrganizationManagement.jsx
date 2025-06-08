// src/components/OrganizationManagement.jsx
import React from "react";

export default function OrganizationManagement() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Organization Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://www.helpinghandindiango.org/wp-content/uploads/2021/10/org-img.jpg"
            alt="Blood Donation Camp"
            className="w-full"
          />
          <div className="text-center md:text-left">
            <img
              src="https://www.helpinghandindiango.org/wp-content/uploads/2017/05/4-4-750x510.jpg"
              alt="Blood Donation Camp"
              className="w-full rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
