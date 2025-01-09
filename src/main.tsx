import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DiscoverPenang from './DiscoverPenang.tsx'
import AboutPenang from './AboutPenang.tsx'
import GetInTouchWithUs from './GetInTouchWithUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiscoverPenang />    
    <AboutPenang />
    <GetInTouchWithUs />
  </StrictMode>,
)
