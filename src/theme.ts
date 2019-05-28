export default {
  carvana: {
    // 2.0 palette -- https://carvana.invisionapp.com/share/8CH6ZTCX5ER#/screens
    body: '#e4ecf0',
    blue: {
      primary: '#00aed9', // links, primary buttons, icons
      hover: '#018dc0', // hover state
      medium: '#00619e', // sticky header background
      dark: '#183558', // navigation header background, headlines, text
      pastel: '#cfeaf2' // accent
    },
    gray: {
      background: '#f4f8fa', // main background within 1800px
      jet: '#363636',
      light: '#d9dde9', // secondary copy, tabs and field outlines, lines
      medium: '#aab1c7', // icons, unselected heart icon
      dark: '#757989' // text and icons
    },
    green: {
      primary: '#1dd08b' // success green
    },
    red: {
      primary: '#ff7171' // alert red, faved
    },
    yellow: {
      primary: '#feb948', // secondary buttons, attentions icons
      hover: '#eb9f23', // hover state
      pastel: '#fbf2de' // accent
    },
    white: {
      primary: '#ffffff'
    },
    stroke: {
      blue: '#122946' // divider line color in header and footer
    },
    impersonationRed: '#ff0000'
  },
  typography: {
    fontFamily: '"Brandon Text", Lato, Helvetica, sans-serif',
    fontSize: '20px'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920
    }
  }
};
