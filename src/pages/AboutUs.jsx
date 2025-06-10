import React from 'react';
import { Eye, Shield, Users, Heart } from 'lucide-react';

const AboutUs = () => {
    const values = [
        {
            title: "Access",
            icon: <Heart className="w-6 h-6" />,
            description:
                "We believe everyone deserves access to healthcare, education, and food.",
            color: "from-red-500 to-pink-500",
        },
        {
            title: "Dignity",
            icon: <Users className="w-6 h-6" />,
            description:
                "We protect the dignity of those we serve and use their stories respectfully.",
            color: "from-blue-500 to-indigo-500",
        },
        {
            title: "Transparency",
            icon: <Eye className="w-6 h-6" />,
            description:
                "We are accountable for every donation and ensure full transparency.",
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Trustees",
            icon: <Shield className="w-6 h-6" />,
            description:
                "We are committed to serving with integrity and community involvement.",
            color: "from-purple-500 to-violet-500",
        },
    ];

    return (
        <div className="bg-white text-gray-800">

            {/* Hero Section */}
            <div
                className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop')`,
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4 max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Helping Hand India NGO</h1>
                    <p className="text-lg md:text-xl">Empowering Women. Educating Generations.</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                        <div className="space-y-6 leading-relaxed text-lg text-gray-700">
                            <p>
                                Helping Hand India NGO is an Indian not-for-profit organization working for Women Education through various programs. We are a non-denominational, non-political organization that has been active for over a decade, primarily focusing on child education and the empowerment of women and girls.
                            </p>
                            <p>
                                We believe that controlling and stopping violence against Women and Children in India is one of the most critical steps toward building a better society. When women are equipped with proper education and resources, they uplift entire families and communities, overcoming poverty and injustice.
                            </p>
                            <p>
                                Our initiatives include basic education, technical/vocational training, protection, proper healthcare, and fostering a healthy environment for better livelihoods.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <img
                            src="https://www.helpinghandindiango.org/wp-content/uploads/2021/09/Shoolathome-rightwindow-1.jpg"
                            alt="Who We Are"
                            className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]"
                        />
                    </div>
                </div>
            </section>

            {/* Vision / Mission Section */}
            <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    {/* Image */}
                    <div className="flex-1 w-full order-2 md:order-1">
                        <img
                            src="https://www.helpinghandindiango.org/wp-content/uploads/2021/09/forSaiNatholdage.jpg"
                            alt="Vision and Mission"
                            className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Vision & Mission</h2>
                        <div className="space-y-6 leading-relaxed text-lg text-gray-800">
                            <p>
                                Children are the future of every nation. Our mission is to overcome poverty and ensure dignity and security for marginalized communities.
                            </p>
                            <p>
                                We collaborate with Mandirs, Masjids, Gurudwaras, Churches, and other NGOs to deliver practical programs that meet basic needs—shelter, food, clean water, education, medical care, and emotional support.
                            </p>
                            <p>
                                Soon, we aim to establish an old age home—“a home away from home”—where orphans and elderly individuals can live self-reliantly and with dignity.
                            </p>
                            <p>
                                Our dream is to build a nation where every child is educated, every youth thrives, and every woman enjoys true equality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                                    >
                                        {value.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
