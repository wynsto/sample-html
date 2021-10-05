import * as React from 'react';
import { Helmet } from "react-helmet";

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

import Aside from './aside'

// const engine = new Styletron();

const Layout = ({ pageTitle, children, path }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title,
        siteUrl
      }
    }
  }
`);

  const [css, theme] = useStyletron();

  const [engine, setEngine] = React.useState(null);

  React.useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import('styletron-engine-atomic').then(styletron => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);

  if (!engine) return null;
  let utteranc = null
  if (path) utteranc = (
    <script src="https://utteranc.es/client.js"
            repo="wynsto/sample-html"
            issue-term={path}
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
  )

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className={css({
          paddingTop: '50px'
        })}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          </Helmet>
          <header  className={css({
            paddingRight: "2rem",
            position: 'fixed',
            boxSizing: 'border-box',
            top: 0,
            left: 0,
            width: '100vw',
            background: '#ffffffcc'
          })}>
          <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>
               {data.site.siteMetadata.title}
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
          </header>
          <main className={css({
            display: 'flex'
          })}>
            <Aside className={css({
              flex: 1
            })}></Aside>
            <section>{children}{utteranc}</section>
          </main>
        </div>
      </BaseProvider>
    </StyletronProvider>
  )
}
export default Layout