import Image from "next/image";
import Link from "next/link";

const NavbarRoom = () => {
  return (
    <div className="w-full h-20 bg-white p-5 px-10">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <Link href="/forum" className="w-5 rounded-full">
            <Image
                src="https://res.cloudinary.com/df6nytit6/image/upload/v1728530464/maxyproject/left-arrow_sakruu.png"
                width="100"
                height="100"
                className="w-5"
            />
          </Link>
        </div>
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
          <h1 className="text-sm text-gray-600">
            #budayatari
          </h1>
        </div>
      </div>
    </div>
  );
};
export default NavbarRoom;
