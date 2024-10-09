import Image from "next/image";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-white text-black min-h-full w-80 p-4">
        <div className="flex space-x-2">
          <Link href="/beranda" className="btn bg-white border-0 shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <button className="btn btn-primary px-20 text-white">Mulai</button>
        </div>
        <div className="py-10">
          <div className="flex items-center space-x-2 px-5">
            <div>
              <Image
                src="https://res.cloudinary.com/df6nytit6/image/upload/v1728507351/maxyproject/chat_hewlhk.png"
                width={100}
                height={100}
                alt="icon"
                className="w-5"
              />
            </div>
            <Link href="" className="font-semibold text-primary">
              Semua diskusi
            </Link>
          </div>
          <div className="py-5">
            <h1 className="text-xs py-2">Kategori</h1>
            <div className="flex items-center space-x-2 px-5 py-2">
              <div className="w-4 h-4 rounded bg-blue-500">
                
              </div>
              <Link href="" className="text-gray-400 font-semibold">
                Warga RW 01
              </Link>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2">
              <div className="w-4 h-4 rounded bg-red-500">
                
              </div>
              <Link href="" className="text-gray-400 font-semibold">
                Warga RW 18
              </Link>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2">
              <div className="w-4 h-4 rounded bg-purple-700">
                
              </div>
              <Link href="" className="text-gray-400 font-semibold">
                Warga RW 22
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
export default Drawer;
