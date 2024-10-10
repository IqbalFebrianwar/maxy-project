import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black px-36 py-5 border border-gray-300">
      <div className="navbar-start">
        <Link href="/beranda" className="btn btn-ghost text-xl">Leuwimalang</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/beranda">Beranda</Link>
          </li>
          <li>
            <a>Tentang</a>
          </li>
          <li>
            <a>Informasi</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <Link href="/forum" className="btn btn-secondary text-white rounded-xl px-10">Forum</Link>
        <Link href="/auth/signup" className="btn btn-primary text-white rounded-xl px-10">Daftar</Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
