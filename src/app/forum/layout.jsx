import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/app/forum/components/navbar"));
const Sidebar = dynamic(() => import("@/app/forum/components/drawer"));

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <main>{children}</main>
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <Sidebar />
      </div>
    </>
  );
}
