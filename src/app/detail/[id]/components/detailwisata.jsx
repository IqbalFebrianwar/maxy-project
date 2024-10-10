"use client";
import { useState } from "react";
import Image from "next/image";


const Detailwisata = () => {
  const imageLinks = [
    "https://res.cloudinary.com/df6nytit6/image/upload/v1728489957/maxyproject/wisata-bopgor_xxdo3f.webp",
    "https://res.cloudinary.com/df6nytit6/image/upload/v1728489374/maxyproject/20230214091140_original_id88dh.webp",
    "https://res.cloudinary.com/df6nytit6/image/upload/v1728489374/maxyproject/Kain_Tenun_Khas_Indonesia_ktht4e.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(imageLinks[0]);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  return (
    <>
      <div className="w-full lg:flex px-40">
        <div className="max-lg:w-full p-10 justify-center">
          <div className="max-w-xl h-[350px] mb-4">
            <img
              src={selectedImage}
              alt="main"
              className="w-full rounded-lg h-full object-cover"
            />
          </div>

          <div className="flex space-x-2">
            {imageLinks.map((img, idx) => (
              <button
                key={idx}
                className={`w-16 h-16 border-2 ${
                  selectedImage === img
                    ? "border-primary"
                    : "border-transparent"
                }`}
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img}
                  alt={`image-${idx}`}
                  className="w-full rounded-lg h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="p-10 max-md:p-5 max-w-lg">
          <h1 className="text-xs text-black font-semibold">Tempat Wisata</h1>
          <h1 className="text-2xl mt-2 text-black font-semibold">
            Jembatan Panjang
          </h1>
          <div className="py-2">
            <div className="flex items-center space-x-1">
              <div>
                <Image
                  src="https://res.cloudinary.com/df6nytit6/image/upload/v1728495087/maxyproject/maps-and-flags_cthely.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className="w-5"
                />
              </div>
              <h1>Cisarua - Bogor</h1>
            </div>
            <div className="flex items-center space-x-1">
              <div>
                <Image
                  src="https://res.cloudinary.com/df6nytit6/image/upload/v1728495556/maxyproject/clock_ql87cd.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className="w-5"
                />
              </div>
              <h1>Setiap hari dari jam 08:30 - 17:00 WIB</h1>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border-base-300 bg-blue-100 text-black border"
          >
            <div className="collapse-title text-xl font-medium">
              Info penting
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                reiciendis reprehenderit optio id quibusdam quaerat veniam vitae
                cumque iure minima facere, eos, quia in, officia deleniti sequi
                fugiat molestias. Debitis?
              </p>
            </div>
          </div>

          <div className="py-5">
            <h1 className="font-semibold">Deskripsi</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nesciunt iste enim quo architecto qui et, harum placeat vel
              reprehenderit beatae aut iusto hic, alias repellat maiores ipsa
              distinctio minus. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati officia itaque at error dignissimos
              magni laudantium, et autem distinctio excepturi perferendis
              praesentium voluptatum maiores. Repudiandae vitae minima illum
              deleniti? Vitae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi iusto quasi excepturi voluptatibus
              corrupti nulla ipsam possimus at id officia! Impedit iusto
              obcaecati, neque veritatis minus dicta inventore voluptatibus
              adipisci? Lorem
            </h1>
          </div>

          <div></div>
        </div>

        <div className="p-10 max-md:p-5 max-w-xl h-full rounded-lg text-center">
          <h1 className="font-semibold">Mulai dari</h1>
          <h1 className="font-semibold text-2xl text-secondary">IDR 55.000</h1>
          <button className="btn btn-secondary w-full text-white">Lihat</button>
        </div>
      </div>

      {/* Kedua */}

      <div className="w-full lg:flex px-44 space-x-5">
        <div className="p-10 bg-white w-full rounded-2xl space-y-5">
          <h1 className="text-2xl font-semibold">Lokasi</h1>
          <div className="w-full bg-white rounded-lg border overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://res.cloudinary.com/df6nytit6/image/upload/v1728499273/maxyproject/Screenshot_2024-10-10_014044_fxiqme.png" // Ganti dengan path gambar peta yang sesuai
                alt="Lokasi"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-7 flex justify-between">
              <div className="flex items-center space-x-1">
                <div>
                  <Image
                    src="https://res.cloudinary.com/df6nytit6/image/upload/v1728495087/maxyproject/maps-and-flags_cthely.png"
                    width={100}
                    height={100}
                    alt="icon"
                    className="w-5"
                  />
                </div>
                <h1>
                  Jalan Desa Leuwimalang no 12, Cisarua, Bogor City, Jawa Barat,
                  Indonesia
                </h1>
              </div>
              <div>
                <button className="btn btn-secondary text-white px-10">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ketiga */}

      <div className="w-full lg:flex px-44 space-x-5">
        <div className="p-10 bg-blue-100 w-full rounded-2xl space-y-5">
          <h1 className="text-2xl font-semibold">Tiket Masuk</h1>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Tiket Kendaraan Bus</h1>
            <h1 className="font-semibold text-green-700">IDR 15.000 per jam</h1>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Tiket Kendaraan Mobil</h1>
            <h1 className="font-semibold text-green-700">IDR 15.000 per jam</h1>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Tiket Kendaraan Motor</h1>
            <h1 className="font-semibold text-green-700">IDR 15.000 per jam</h1>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Tiket per orang</h1>
            <h1 className="font-semibold text-green-700">
              Dewasa : IDR 15.000 per jam
            </h1>
            <h1 className="font-semibold text-green-700">
              Anak - anak : IDR 15.000 per jam
            </h1>
          </div>
        </div>
        <div className="p-10 bg-blue-100 w-full rounded-2xl space-y-5">
          <h1 className="text-2xl font-semibold">Rekomendasi Transportasi</h1>
          <h1 className="">Berdasarkan dari lokasi anda ke tempat tujuan*</h1>
          <div className="p-5 rounded-xl bg-white flex w-full justify-between items-center">
            <div>
              <h1 className="font-semibold text-black">Mobil</h1>
              <h1 className="font-semibold text-green-700">
                Jarak : 160 Kilometer
              </h1>
              <h1 className="font-semibold text-green-700">
                Waktu perkiraan : 1-2 Jam
              </h1>
            </div>
            <div className="badge badge-secondary gap-2">Rekomendasi</div>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Motor</h1>
            <h1 className="font-semibold text-green-700">
              Jarak : 160 Kilometer
            </h1>
            <h1 className="font-semibold text-green-700">
              Waktu perkiraan : 1-2 Jam
            </h1>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Kereta</h1>
            <h1 className="font-semibold text-green-700">
              Jarak : 160 Kilometer
            </h1>
            <h1 className="font-semibold text-green-700">
              Waktu perkiraan : 1-2 Jam
            </h1>
          </div>
          <div className="p-5 rounded-xl bg-white">
            <h1 className="font-semibold text-black">Pesawat</h1>
            <h1 className="font-semibold text-green-700">
              Jarak : 160 Kilometer
            </h1>
            <h1 className="font-semibold text-green-700">
              Waktu perkiraan : 1-2 Jam
            </h1>
          </div>
        </div>
      </div>

      {/* Keempat */}

      <div className="max-w-6xl lg:flex px-44 space-x-5">
        <div className="p-10 bg-white w-full rounded-2xl space-y-5">
          <h1 className="text-2xl font-semibold">Review</h1>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn border border-secondary bg-transparent text-secondary"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Tulis Komentar
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">
                Apa komentar mu tentang ini ?
              </h3>
              <div className="py-5">
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Bio"
                ></textarea>
                <button className="btn btn-secondary text-white">Kirim</button>
              </div>
            </div>
          </dialog>
          <div className="p-5 rounded-xl bg-white border">
            <h1 className="font-semibold text-black text-xl">Marsha</h1>
            <h1 className="text-black">Bagus sekali tempatnya!</h1>
          </div>
          <div className="p-5 rounded-xl bg-white border">
            <h1 className="font-semibold text-black text-xl">Marsha</h1>
            <h1 className="text-black">Bagus sekali tempatnya!</h1>
          </div>
          <div className="p-5 rounded-xl bg-white border">
            <h1 className="font-semibold text-black text-xl">Marsha</h1>
            <h1 className="text-black">Bagus sekali tempatnya!</h1>
          </div>
          <div className="p-5 rounded-xl bg-white border">
            <h1 className="font-semibold text-black text-xl">Marsha</h1>
            <h1 className="text-black">Bagus sekali tempatnya!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailwisata;
