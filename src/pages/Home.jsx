export default function Home() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('../photos/dnevna.jpeg')",
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
          Luxury lakeside apartment designed for peaceful escapes,
          beautiful mornings, and unforgettable vacations.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
          Book Your Stay
        </button>

         <div className="mt-16 flex justify-center">
    <div className="animate-bounce text-white text-4xl">
      ↓
    </div>
  </div>

      </div>
    </section>
  );
}