import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
  queryClient,
  LazyMotion,
  QueryClientProvider,
  ReactQueryDevtools,
  domAnimation,
} from './config/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import { CookiesProvider } from 'react-cookie'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <PrimeReactProvider value={{ unstyled: false }}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <LazyMotion features={domAnimation}>
              <App />
            </LazyMotion>
            <ReactQueryDevtools buttonPosition="bottom-right" />
          </QueryClientProvider>
        </BrowserRouter>
      </PrimeReactProvider>
    </CookiesProvider>
  </StrictMode>
)
