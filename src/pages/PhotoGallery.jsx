import React from 'react';

const galleryImages = [
    // Unsplash NGO/Volunteering images (24 total)
    "https://images.unsplash.com/photo-1609838463761-e0e94f5793f9?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1588411108365-1a1d529bba47?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1609821804968-1c20aa9bcb37?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1614849286445-d52bd183eb6f?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1494537250645-281b6b08b3ff?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1530353287101-6514123019d5?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1553532076-6c3a838beedb?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1544421169-8b1296f4d8c0?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1515374912367-195ffdbe51f5?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1509718443690-d8e2fb3474d6?auto=format&fit=crop&w=600",
];

const PhotoGallery = () => (
    <section>
        {/* Hero Section */}
        <div
            className="bg-cover bg-center h-72 md:h-96 flex items-center justify-center text-white text-center px-4"
            style={{
                backgroundImage:
                    "url('https://www.helpinghandindiango.org/wp-content/uploads/2017/05/6-4-750x510.jpg')",
            }}
        >
            <div className="">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 text-b">Moments of Impact</h1>
                <p className="text-md md:text-lg">
                    A glimpse into our journey of serving communities with compassion and purpose.
                </p>
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {galleryImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-lg bg-white shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default PhotoGallery;
