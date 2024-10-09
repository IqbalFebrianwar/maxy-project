import Image from "next/image";
import Link from "next/link";

const Wisata = () => {
  const places = [
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Jembatan Panjang",
      location: "Cisarua Bogor",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <main className="px-44">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <Link href="/detail/nasna8sas9asash9a"
            key={index}
            className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={400} // Lebar gambar
              height={300} // Tinggi gambar
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Wisata;
