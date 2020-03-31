import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Avatar from "../../content/assets/mono-c.svg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio">
      <Avatar className="avatar" />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </p>
    </div>
  )
}

export default Bio
