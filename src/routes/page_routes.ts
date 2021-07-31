import { Cart as CartPage } from '../screens'
import { Home as HomePage } from '../screens'
import { Liked as LikedPage } from '../screens'
import { Profile as ProfilePage } from '../screens'

export const routes = [ 
    {
        path: '/web-stream/',
        exact: true,
        content: HomePage
    },
    {
        path: '/web-stream/cart',
        exact: true,
        content: CartPage
    },
    {
        path: '/web-stream/liked',
        exact: true,
        content: LikedPage
    },
    {
        path: '/web-stream/profile',
        exact: true,
        content: ProfilePage
    }
]
