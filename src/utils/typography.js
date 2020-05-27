import Typography from "typography"
import './../fonts/fonts.css'


const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  scaleRatio: 3,
  headerFontFamily: [
    "Suisse Intl",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Suisse Intl", "sans-serif"],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
      fontStyle: 'italic',
      paddingLeft: rhythm(13/16),
      marginLeft: rhythm(1),
      borderLeft: `1px solid black`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

export default typography