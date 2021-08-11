// imports
import * as React from "react"
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <div>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: id, order: DESC}) {
      nodes {
        id
        body
        slug
        frontmatter {
          date
          title
        }
      }
    }
  }
`

export default BlogPage