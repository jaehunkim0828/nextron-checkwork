import React from 'react';
import Head from 'next/head';

function Layout(porps: any) {
  return (
    <React.Fragment>
      <Head>
        <title>Check todo list</title>
      </Head>
      {porps.children}
    </React.Fragment>
  )
}

export default Layout;