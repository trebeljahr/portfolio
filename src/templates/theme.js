import { createMuiTheme } from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"

const theme = createMuiTheme({
  palette: {
    secondary: red,
    primary: red,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  overrides: {
    MuiPaper: {
      root: {
        padding: "20px",
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
})
export default theme
