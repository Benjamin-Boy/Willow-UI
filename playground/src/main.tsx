// Libraries
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";

// CSS
import './index.css'

// Router
import { router } from './router/router.ts';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
