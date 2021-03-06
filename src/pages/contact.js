import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { loadReCaptcha } from "react-recaptcha-v3"
import ContactForm from "../components/contactform"
import Header from "../components/header"
import MobileMenu from "../components/menus/Mobile"

const OutlinedTextFields = () => {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    loadReCaptcha(process.env.GATSBY_RECAPTCHA_API_PUBLIC_KEY)
    setMount(true)
  }, [])
  return (
    <Layout>
      <Header />
      <MobileMenu color="black" />
      {mount ? <ContactForm /> : null}
    </Layout>
  )
}

export default OutlinedTextFields
