import { Routes, Route } from 'react-router-dom'
import { routes } from '../routes'

export enum RouteNames {
  HOME = '/',
  ITEM = '/item/:id',
}
export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  )
}
