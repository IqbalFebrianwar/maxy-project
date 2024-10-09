import dynamic from "next/dynamic";

const Detailwisata = dynamic (()=> import("@/app/detail/[id]/components/detailwisata"))
export default function Detail() {
  return (
    <main className="pb-64">
      <Detailwisata />
    </main>
  );
}
