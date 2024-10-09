import Image from "next/image";

const Recwisata = () => {
  const places = [
    {
      name: "Kebun teh",
      image:
        "https://res.cloudinary.com/df6nytit6/image/upload/v1728488223/maxyproject/kebunteh_oqvspp.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Kebun teh",
      image:
        "https://res.cloudinary.com/df6nytit6/image/upload/v1728488223/maxyproject/kebunteh_oqvspp.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Kebun teh",
      image:
        "https://res.cloudinary.com/df6nytit6/image/upload/v1728488223/maxyproject/kebunteh_oqvspp.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <main className="px-44">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-ss-xl rounded-se-xl rounded-ee-[55px] shadow-lg cursor-pointer"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
              {place.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Recwisata;
