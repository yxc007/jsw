import Layout from '@/layout'
export const dishesRoutes = 
    {
      path: '/dishes',
      component: Layout,
      redirect: '/dishes/restaurant',
      name: 'dishes',
      meta: { title: '菜品' },
      children: [
        {
          path: 'restaurant',
          name: 'restaurant',
          component: () => import('@/views/dishes/restaurant'),
          meta: { title: '餐厅列表' },
          children: [
            {
              path: 'cuisine',
              name: 'cuisine',
              component: () => import('@/views/dishes/restaurant/cuisine'),
              meta: { title: '餐厅菜品列表' }
            },
            {
              path: 'classify',
              name: 'classify',
              component: () => import('@/views/dishes/restaurant/classify'),
              meta: { title: '餐厅菜品列表' }
            },
        ]
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('@/views/dishes/album'),
          meta: { title: '菜品相册' }
        }
      ]
    }
    export default dishesRoutes