//Rus
/*
  1.	Запустите JSON-сервер (инструкции указаны в видео и в файле links).
  2.	Создайте две отдельные функции fetch для запроса данных категорий и продуктов.
  3.	Удалите старую логику использования данных категорий и продуктов в магазине, заменив её на получение данных с помощью loader в параметрах маршрутизатора.
  4.	Создайте универсальный обработчик ошибок с помощью errorElement.
  5.	Получите данные с категориями и продуктами от API, используя хук useLoaderData(), и примените их на страницах Home и Category.
  6.	С помощью state передайте массив продуктов на страницу ProductDetails. Получите данные с помощью хука useLocation() и используйте их для фильтрации конкретного продукта по параметру URL.
*/

//Eng

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import ErrorBoundaty from './components/ErrorBoundaty'
import Layout from './components/Layout'
import fetchCategoryLoader from './loaders/categoryLoader'
import fetchProductLoader from './loaders/productsLoader'
import About from './pages/About'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Thanks from './pages/Thanks'

const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout />,
  children: [
   {
    index: true,
    element: <Home />,
    loader: fetchCategoryLoader,
    errorElement: <ErrorBoundaty />
   },
   { path: 'old-home', element: <Navigate to={'/'} /> },
   { path: 'about', element: <About /> },
   { path: 'cart', element: <Cart /> },
   { path: 'thanks', element: <Thanks /> },
   {
    path: 'category/:categoryId',
    element: <Category />,
    loader: fetchProductLoader,
    errorElement: <ErrorBoundaty />
   },
   { path: 'product/:productId', element: <ProductDetails /> },
   { path: '*', element: <NotFound /> }
  ]
 }
])

function App() {
 return <RouterProvider router={router} />
}

export default App
