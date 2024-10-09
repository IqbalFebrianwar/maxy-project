import Image from "next/image";

const Recbudaya = () => {
  const budaya = [
    {
      name: "Pecak silat",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489374/maxyproject/20230214091140_original_id88dh.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Tarian",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489375/maxyproject/Berbagai-Macam-Tarian-Tradisional-di-Banten-1200px-x-675px.jpg_cqrofg.webp", // Ganti dengan path gambar yang sesuai
    },
    {
      name: "Kerajinan kain",
      image: "https://res.cloudinary.com/df6nytit6/image/upload/v1728489374/maxyproject/Kain_Tenun_Khas_Indonesia_ktht4e.webp", // Ganti dengan path gambar yang sesuai
    },
  ];
  return (
    <main className="px-44">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {budaya.map((budaya, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-ss-xl rounded-se-xl rounded-ee-[55px] shadow-lg cursor-pointer"
          >
            <Image
              src={budaya.image}
              alt={budaya.name}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
              {budaya.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Recbudaya;
