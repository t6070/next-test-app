import React, { ReactNode } from 'react'
import Head from 'next/head'
import ButtonAppBar from "./AppBar";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <ButtonAppBar/>
    </header>
    {children}
  </div>
)

export default Layout
