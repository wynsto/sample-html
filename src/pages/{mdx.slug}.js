import * as React from 'react'
import { graphql } from 'gatsby' // highlight-line
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line


// styles
const pageStyles = {
  color: "#232129",
  padding: "0 1.5rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const BlogPost = ({data}) => {
  return (<Layout pageTitle={data.mdx.frontmatter.title} path={data.mdx.id}>
      <div style={pageStyles}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
    </Layout>)
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
// highlight-end

export default BlogPost