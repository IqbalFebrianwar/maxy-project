import dynamic from "next/dynamic";

const Navbar = dynamic (()=> import ("@/app/beranda/components/navbar"))
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}