import dynamic from "next/dynamic";

const Navbar = dynamic (()=> import ("@/app/beranda/components/navbar"))
const Footer = dynamic (()=> import ("@/app/beranda/components/footer"))

export const metadata = {
  title: '...',
  description: '...',
  authors: '',
  keywords:''
}
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}