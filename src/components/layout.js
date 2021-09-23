import * as React from 'react'
import { Helmet } from "react-helmet"

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, useStyletron} from 'baseui';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";


import { Link, useStaticQuery, graphql } from 'gatsby'


const engine = new Styletron();

const Layout = ({ pageTitle, children }) => {
  const [css, theme] = useStyletron()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          siteUrl
        }
      }
    }
  `)
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className={css({
        })}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          </Helmet>
          <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>
                <header>{data.site.siteMetadata.title}</header>
              </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <StyledLink href="/">
                  Home
                </StyledLink>
              </StyledNavigationItem>
              <StyledNavigationItem>
                <StyledLink href="/map">
                  Map
                </StyledLink>
              </StyledNavigationItem>
            </StyledNavigationList>
          </HeaderNavigation>
          <main>
            {children}
          </main>
        </div>
      </BaseProvider>
    </StyletronProvider>
  )
}
export default Layout