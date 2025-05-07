import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Router'
import { RouterProvider } from 'react-router'
import { FavProvider} from './ContextAndAuth/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavProvider >
        <RouterProvider router={router} ></RouterProvider>
    </FavProvider>
  </StrictMode>,
)
