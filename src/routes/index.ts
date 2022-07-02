import React from 'react'
import { Home } from '../pages/Home'
import { Item } from '../pages/Item'

interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  HOME = '/',
  ITEM = '/item/:id',
}

export const routes: IRoute[] = [
  { path: RouteNames.HOME, element: Home },
  { path: RouteNames.ITEM, element: Item },
]
