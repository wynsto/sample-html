import * as React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import AdSense from 'react-adsense';

// styles
const pageStyles = {
  color: "#232129",
  padding: "0 1.5rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// markup
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle={data.site.siteMetadata.title}>
      <div style={pageStyles}>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/${node.slug}`}  style={linkStyle}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>
                {node.excerpt}
              </p>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: id, order: DESC}) {
      nodes {
        id
        excerpt
        slug
        frontmatter {
          date
          title
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
