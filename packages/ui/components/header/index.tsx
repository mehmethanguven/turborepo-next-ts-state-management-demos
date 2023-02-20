import MobileMenu from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { INavLink } from '../../types'
import Head from 'next/head'

type Props = {
  headerNavLinks: INavLink[]
  title?: string
}
const Header = ({ headerNavLinks, title }: Props) => {
  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
      <DesktopMenu headerNavLinks={headerNavLinks} />
      <MobileMenu headerNavLinks={headerNavLinks} />
    </header>
  )
}
export default Header
