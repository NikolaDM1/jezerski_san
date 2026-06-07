import ApartmentCard from "../components/ApartmentCard";

export default function Home() {
  const apartments = [
    {
      id: 1,
      title: "Deluxe Lake View",
      description: "Spacious apartment with beautiful lake views.",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Modern Escape",
      description: "Elegant design perfect for couples.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nature Retreat",
      description: "Peaceful environment surrounded by nature.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('../photos/dnevna.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            Jezerski San
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl mb-8 leading-relaxed">
            Luxury lakeside apartment designed for peaceful escapes, beautiful
            mornings, and unforgettable vacations.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            Book Your Stay
          </button>

          <div className="mt-16 flex justify-center">
            <div className="animate-bounce text-white text-4xl">↓</div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center">Our Apartment</h2>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Experience the perfect blend of comfort and nature at Jezerski San.
            Our lakeside apartment offers stunning views, modern amenities, and
            a tranquil atmosphere for an unforgettable stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
