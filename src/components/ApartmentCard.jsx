export default function ApartmentCard({ apartment }) {
  return (
    <div
      key={apartment.id}
      className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <img
        src={apartment.image}
        alt={apartment.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{apartment.title}</h3>
        <p className="text-gray-600 mb-6">{apartment.description}</p>
        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}
