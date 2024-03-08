import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/ProductDetail";

export const routerConfig = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        
    },
    {
        index: true,
        path: 'product/:productId',
        element: <ProductDetail/>
    }
])
