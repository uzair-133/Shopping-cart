import ProductCard from "./ProductCard"



const Products = [
    {
        id: 1,
        name: "laptop",
        price: "800"
    },
    {
        id: 2,
        name: "mobile",
        price: "600"
    },
    {
        id: 3,
        name: "heagphone",
        price: "300"
    },
    {
        id: 4,
        name: "keyboard",
        price: "400"
    }
]

const ProductList = () => {
    return (
        <>

            <div className="row">
                {Products.map((p) => (
                    <div key={p.id} className="col-md-3 mb-4">
                        <ProductCard product={p}/>
                    </div>
                ))}

            </div>

        </>
    )
}

export default ProductList