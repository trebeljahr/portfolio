import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function PaperSheet(props) {
  const { classes } = props

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is yet another post on yet another sheet of paper. On a /posts/
          domain hopefully.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Image />
      </Paper>
    </Layout>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperSheet)