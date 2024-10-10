import { Metadata } from 'next'

export const Metadata = {
  title: '...',
  description: '...',
  authors: '',
  keywords:''
}

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}