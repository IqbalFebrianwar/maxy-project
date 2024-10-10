import dynamic from "next/dynamic";

const Banner = dynamic (()=> import("@/app/beranda/components/banner"))
const Recwisata = dynamic (()=> import("@/app/beranda/components/recwisata"))
const Recbudaya = dynamic (()=> import("@/app/beranda/components/recbudaya"))
const Wisata = dynamic (()=> import("@/app/beranda/components/wisata"))

export default function Home() {
  return (
    <main className="pb-10">
      <Banner />
      <div className="w-full justify-between flex py-5 px-32">
        <h1 className="text-black font-semibold text-2xl">Rekomendasi Tempat Wisata</h1>
        <h1 className="text-gray-400 font-normal text-md">Lihat semuanya</h1>
      </div>
      <Recwisata />
      <div className="w-full justify-between flex py-5 px-32">
        <h1 className="text-black font-semibold text-2xl">Rekomendasi Budaya</h1>
        <h1 className="text-gray-400 font-normal text-md">Lihat semuanya</h1>
      </div>
      <Recbudaya />
      <div className="w-full justify-between flex py-5 px-32 mt-10">
        <h1 className="text-black font-semibold text-2xl">Tempat Wisata</h1>
      </div>
      <Wisata />
    </main>
  );
}
