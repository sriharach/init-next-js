import '@/styles/index.less'
import ThemeProvider from '@/contexts/StyledThemeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
