import React from "react";

const OurTeam = () => {
    const boardOfDirectors = [
        {
            name: "Afreen Khundmiri",
            title: "Founder & Executive Director",
            image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",

            description: "Afreen started Lillah Services to deliver hope and give dignity to those who need it the most. After years of searching for an international charity that met the high standards of due diligence, transparency and minimal waste, she formed Lillah Services. Prior to starting Lillah Services, Afreen held Audit roles in IT and Finance. Afreen has a BS in Computer Science from Kennesaw State University and an MBA from Kennesaw State University."
        },
        {
            name: "Syed Khundmiri",
            title: "Director",
            image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",

            description: "With over 20 years in leadership roles at Consumer Goods, Finance, Insurance, Entertainment and Healthcare organizations, Syed is the chief strategist at Lillah Services in addition to serving as the executive assistant to the Executive Director. Syed has an undergrad in Business from Kennesaw State University and an MBA from Guhang State University."
        },
        {
            name: "Rukhsar Khundmiri",
            title: "Treasurer & UX Design Contributor",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

            description: "Rukhsar is the Treasurer at Lillah Services, ensuring efficient use of donations. Alongside financial duties, she's enhanced the organization's online user experience as a UX Design student with a passion for mixed media and digital art."
        },
        {
            name: "Zoha Khundmiri",
            title: "Secretary",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

            description: "As the Secretary, Zoha ensures record management and supports Directors serving Lillah Services. Zoha is a first year student at Georgia State University pursuing Computer Science."
        }
    ];

    const boardOfAdvisors = [
        {
            name: "Zakir",
            title: "Development Director",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

            description: "Zakir has over 15 years of experience in strategic business development, data analytics, merchandising and supply chain leadership at fortune 50 companies. Building brands and effectively marketing them is his passion. Zakir is the Development Director for Lillah Services leading corporate fundraising planning, special events and activities that maximize donor engagement, ensuring the organization is meeting its annual targets. Zakir joined Lillah Services in 2022."
        }
    ];

    const medicalAdvisors = [
        {
            name: "Dr. Mohammad Kamran, MD",
            title: "Senior Medical Advisor",
            image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",

            description: "Dr. Kamran is a rheumatologist in Marietta, Georgia and is affiliated with multiple hospitals in the area, including WellStar Cobb Hospital and WellStar Kennestone Hospital. Dr. Kamran graduated from Khyber Medical College in Pakistan. He did his internal medicine residency at the"
        }
    ];

    const operationsTeam = [
        {
            name: "Syed Abdul Kareem",
            title: "Territory Manager",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

            description: "Syed Abdul Kareem joined Lillah Services in July 2023 as Territory Manager in India, overseeing day-to-day charity operations and ensuring proper compliance of due-diligence activities and patient privacy. He is also responsible for recruitment, training and management of case managers and operations team"
        },
        {
            name: "Syed Hussain",
            title: "Case Worker",
            image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",
            description: "Syed Hussain is a member of the Operations team at Lillah Services. Case workers help vulnerable people identify their emotional, practical and specialist needs. Our case workers' time is spent talking to clients, completing due diligence, delivering food or making treatment arrangements. Case workers are expected to try and build relationships with clients to help them navigate through their crisis and provide them with ongoing support."
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2d3f]">Our Team</h2>
                    <div className="w-12 h-1 bg-yellow-400 mx-auto my-4"></div>
                </div>

                {/* Board of Directors */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Board of Directors</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {boardOfDirectors.map((member, index) => (
                            <div key={index} className="flex bg-white shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 sm:w-44 h-32 sm:h-44 object-cover flex-shrink-0"
                                />
                                <div className="p-4 flex-1">
                                    <h4 className="text-lg font-bold text-[#1c2d3f]">{member.name}</h4>
                                    <p className="italic text-sm text-gray-600 mb-2">{member.title}</p>
                                    <div
                                        className="text-sm text-gray-700 overflow-y-auto pr-2"
                                        style={{
                                            maxHeight: '80px',
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        }}
                                    >
                                        <style jsx>{`
                                            div::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>
                                        {member.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Board of Advisors */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Board of Advisors</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {boardOfAdvisors.map((member, index) => (
                            <div key={index} className="flex bg-white shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 sm:w-40 h-32 sm:h-40 object-cover flex-shrink-0"
                                />
                                <div className="p-4 flex-1">
                                    <h4 className="text-lg font-bold text-[#1c2d3f]">{member.name}</h4>
                                    <p className="italic text-sm text-gray-600 mb-2">{member.title}</p>
                                    <div
                                        className="text-sm text-gray-700 overflow-y-auto pr-2"
                                        style={{
                                            maxHeight: '80px',
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        }}
                                    >
                                        <style jsx>{`
                                            div::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>
                                        {member.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Medical Advisors */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Medical Advisors</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {medicalAdvisors.map((member, index) => (
                            <div key={index} className="flex bg-white shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 sm:w-40 h-32 sm:h-40 object-cover flex-shrink-0"
                                />
                                <div className="p-4 flex-1">
                                    <h4 className="text-lg font-bold text-[#1c2d3f]">{member.name}</h4>
                                    <p className="italic text-sm text-gray-600 mb-2">{member.title}</p>
                                    <div
                                        className="text-sm text-gray-700 overflow-y-auto pr-2"
                                        style={{
                                            maxHeight: '80px',
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        }}
                                    >
                                        <style jsx>{`
                                            div::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>
                                        {member.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Operations Team */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Operations Team</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {operationsTeam.map((member, index) => (
                            <div key={index} className="flex bg-white shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 sm:w-40 h-32 sm:h-40 object-cover flex-shrink-0"
                                />
                                <div className="p-4 flex-1">
                                    <h4 className="text-lg font-bold text-[#1c2d3f]">{member.name}</h4>
                                    <p className="italic text-sm text-gray-600 mb-2">{member.title}</p>
                                    <div
                                        className="text-sm text-gray-700 overflow-y-auto pr-2"
                                        style={{
                                            maxHeight: '80px',
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        }}
                                    >
                                        <style jsx>{`
                                            div::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>
                                        {member.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;