import React from 'react';

const LegalStatus = () => {
    const legalInfo = [
        {
            srNo: 1,
            registration: 'Registered under Trust Registration, Delhi',
            regNo: 'Reg. No. 373, Book 4, Vol – 741',
        },
        {
            srNo: 2,
            registration: 'PAN No.',
            regNo: 'AABTH3890A',
        },
        {
            srNo: 3,
            registration: '12 A',
            regNo: 'DEL-HR24876-23122015/5486 (New) AABTH3890AE20214',
        },
        {
            srNo: 4,
            registration: '80 G',
            regNo: 'DEL-HE26526-23122015/6570 (New) AABTH3890AF20156',
        },
        {
            srNo: 5,
            registration: '35 AC',
            regNo: 'Not Applied',
        },
        {
            srNo: 6,
            registration: 'Ngo Partnership (NITI Aayog)',
            regNo: 'DL/2017/0118386',
        },
        {
            srNo: 7,
            registration: 'FCRA Registration',
            regNo: 'Under Consideration for apply',
        },
        {
            srNo: 8,
            registration: 'Income Tax India',
            regNo: (
                <a
                    href="https://www.incometaxindia.gov.in/Pages/utilities/exempted-institutions.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    www.incometaxindia.gov.in/Pages/utilities/exempted-institutions.aspx
                </a>
            ),
        },
    ];

    return (

        <div className="bg-white text-gray-800">

            {/* Hero Section After Table */}
            <div
                className="relative h-[60vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&fit=crop&w=1200&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-white text-center px-4 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Committed to Legal Transparency</h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Our NGO is fully registered and compliant with all applicable government regulations, ensuring the highest level of accountability and trust.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Legal Status</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300 text-sm md:text-base">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-left">Sr. No</th>
                                <th className="border px-4 py-2 text-left">Registration</th>
                                <th className="border px-4 py-2 text-left">Regd. No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {legalInfo.map((item) => (
                                <tr key={item.srNo} className="hover:bg-gray-50">
                                    <td className="border px-4 py-3">{item.srNo}</td>
                                    <td className="border px-4 py-3">{item.registration}</td>
                                    <td className="border px-4 py-3">{item.regNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LegalStatus;
