import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../store/products/products"

const ProductDetail = () => {
    console.log("product detail")
    const { productId = '1' } = useParams()
    const {isLoading, isUninitialized, isError, data } =  useGetProductQuery(productId)

    if(isLoading || isUninitialized) return <p>Loading...</p>
    if(isError) return <p>Something went wrong</p>
    return (
        <div className="product">
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.rating}</p>
        </div>
    )
}

export default ProductDetail
