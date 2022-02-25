import type { AppProps } from 'next/app'
import { ScrollToTop } from '../components/scrollToTop'
import '../styles/globals.css'

/**
 * SSRを無効にするためのラッパー
 */
function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return <SafeHydrate>
    <ScrollToTop />
    <Component {...pageProps} />
  </SafeHydrate>
}

export default MyApp
