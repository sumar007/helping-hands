import React, { useState } from 'react';

const FloatingContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Form Panel */}
      {isOpen && (
        <div className="fixed bottom-0 md:bottom-20 right-0 md:right-4 w-full md:w-80 bg-white rounded-t-xl md:rounded-xl shadow-lg p-4 z-50 border-t md:border">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-orange-500 font-bold text-sm">Quick Inquiry / Contact Us</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 font-bold text-lg">
              ×
            </button>
          </div>
          <form className="space-y-3">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded-full text-sm" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded-full text-sm" />
            <input type="text" placeholder="Phone" className="w-full p-2 border rounded-full text-sm" />
            <textarea placeholder="Message" className="w-full p-2 border rounded-xl text-sm resize-none" rows="3"></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 rounded-full">
              SUBMIT
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-0 md:bottom-4 right-0 md:right-4 z-40 w-full md:w-auto flex justify-center items-center bg-orange-500 text-white font-semibold px-4 py-3 md:py-2 rounded-none md:rounded-full shadow-md text-sm"
      >
        📧 Quick Inquiry / Contact Us
      </button>
    </>
  );
};

export default FloatingContactForm;
