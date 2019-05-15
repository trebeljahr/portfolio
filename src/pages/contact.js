import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import { loadReCaptcha } from "react-recaptcha-v3"
import ContactForm from "../components/ContactForm"

class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mount: false }
  }
  componentDidMount = () => {
    loadReCaptcha(process.env.GATSBY_RECAPTCHA_API_PUBLIC_KEY)
    this.setState({ mount: true })
  }
  render = () => {
    return (
      <Layout>
        <SEO
          title="Home"
          addition="Contact"
          keywords={[`gatsby`, `application`, `react`]}
        />
        {this.state.mount ? <ContactForm /> : null}
      </Layout>
    )
  }
}

export default OutlinedTextFields