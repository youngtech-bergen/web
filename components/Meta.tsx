import React from 'react'
import Head from 'next/head'
import { SiteProps } from '../typings/site'

const Meta: React.FC<SiteProps> = props => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{props.siteTitle}</title>
      <meta name="Description" content={props.siteDescription}></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
)

export default Meta
