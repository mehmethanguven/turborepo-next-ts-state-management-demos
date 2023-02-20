import React, { ReactNode } from 'react'
import { INavLink } from '../../types'
import Footer from '../footer'
import Header from '../header'
import { Title } from '../Title'

type Props = {
  headerNavLinks: INavLink[]
  children: any
  title: string
}

const Layout = ({ headerNavLinks, children, title }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between w-full h-screen">
        <div className="sticky top-0 z-50">
          <Header headerNavLinks={headerNavLinks} title={title} />
        </div>

        <main className="max-w-6xl mb-auto text-left md:mx-auto md:p-4 md:px-10">
          <Title title={title} />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
