import Footer from './Footer'
import Meta from './meta'
import Link from 'next/link'
import Header from './Header'
import BlueButton, {buttonStatus} from '../BlueButton'
import Container from '../Container'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
        <main>{children}</main> 
      <Footer />
    </>
  )
}
