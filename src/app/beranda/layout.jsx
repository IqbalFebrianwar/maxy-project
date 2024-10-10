import dynamic from "next/dynamic";
import { Metadata } from 'next'

const Navbar = dynamic (()=> import ("@/app/beranda/components/navbar"))
const Footer = dynamic (()=> import ("@/app/beranda/components/footer"))

export const Metadata = {
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