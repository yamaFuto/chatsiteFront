import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layout"
import { ThemeProvider } from "@/context/ThemeContext"
import { PaginationProvider } from "@/context/PaginationContext"
import { SentProvider } from "@/context/SentContext";
import { SearchProvider } from "@/context/SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SearchProvider>
      <SentProvider>
        <ThemeProvider>
          <PaginationProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PaginationProvider>
        </ThemeProvider>
      </SentProvider>
    </SearchProvider>
    </>
  )
}
