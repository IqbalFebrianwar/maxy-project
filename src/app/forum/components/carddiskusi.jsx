import Link from "next/link";

const CardDiskusi = () => {
  return (
    <main className="py-5 space-y-3">
      <Link href="/forum/roomchat" className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Warga RW 01</h1>
            <h1 className="text-sm text-gray-400">
              Jaenab membalas 30 menit yang lalu
            </h1>
          </div>
        </div>
        <div className="badge bg-blue-500 text-white">Warga RW 01</div>
      </Link>
      <Link href="/forum/roomchat" className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Warga RW 18</h1>
            <h1 className="text-sm text-gray-400">
              Kukang membalas 2 menit yang lalu
            </h1>
          </div>
        </div>
        <div className="badge bg-red-500 text-white">Warga RW 18</div>
      </Link>
      <Link href="/forum/roomchat" className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Warga RW 22</h1>
            <h1 className="text-sm text-gray-400">
              Udin14 membalas 10 menit yang lalu
            </h1>
          </div>
        </div>
        <div className="badge bg-purple-700 text-white">Warga RW 22</div>
      </Link>
    </main>
  );
};
export default CardDiskusi;
