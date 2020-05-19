import React, { useState } from "react"
import Section from "../components/section"
import MobileMenu from "../components/menus/Mobile"
import { graphql } from "gatsby"
import Header from "../components/header"
import "../css/main.css"

const sections = [
  { text: "Programmer", link: "/coding", imgPath: "programmer" },
  { text: "Photographer", link: "/photography", imgPath: "photographer" },
  { text: "Traveler", link: "https://photodyssee.com", imgPath: "traveler" },
]

const Main = ({ data }) => {
  const [active, setActive] = useState(0)
  const nextSection = () => {
    setActive(old => (old + 1 >= sections.length ? 0 : old + 1))
  }
  return (
    <div>
      <Header />
      <MobileMenu color="white" display={true} />
      {sections.map((section, index) => {
        const img = data.images.edges.find(
          ({ node }) => node.name === section.imgPath
        )
        const sources = [
          img.node.small.fluid,
          { ...img.node.medium.fluid, media: "(min-width: 700px)" },
          { ...img.node.large.fluid, media: "(min-width: 1800px)" },
          { ...img.node.full.fluid, media: "(min-width: 3000px)" },
        ]
        return (
          <Section
            key={index}
            active={index === active}
            nextSection={nextSection}
            img={sources}
            headline={section.text}
            href={section.link}
          />
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "images/banners" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          small: childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          medium: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
          large: childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Main
