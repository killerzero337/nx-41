import '../globals.css'
import Menu2 from '../Menu2'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function BlogLayout({ children }) {
  return (

    <>
      <Menu2 />
      {children}

    </>
  )
}

