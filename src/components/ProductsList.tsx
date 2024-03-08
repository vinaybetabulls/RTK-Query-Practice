import { useGetProductsListQuery } from "../store/products/products"

import { useNavigate } from "react-router-dom"


const ProductsList = () => {
    const { data, isLoading, isError, isUninitialized } = useGetProductsListQuery()
    const navigate =  useNavigate()

    if (isLoading || isUninitialized) return <p>Loading....</p>
    if (isError) return <p> Something went wrong</p>

    const handleClick = (id: number) => {
        console.log({routerId: id})
        navigate(`/product/${id}`)
    }
    return (
        <div className="products">
            {
                data.products.map((product) => (
                    <div key={product.id} onClick={()=> handleClick(product.id)} className="product">
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductsList
