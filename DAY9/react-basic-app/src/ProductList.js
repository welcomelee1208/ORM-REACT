import React, { useState } from 'react'

const ProductList = () => {
    //상품목록 데이터
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: '삼성노트북',
            price: 1000,
        },
        {
            id: 2,
            productName: 'LG노트북',
            price: 2000,
        },
        {
            id: 3,
            productName: '한성노트북',
            price: 3000,
        },
        {
            id: 4,
            productName: 'HP노트북',
            price: 4000,
        },
    ])

    //단일 상품정보 관리 상태값 정의하기
    const [product, setProduct] = useState({
        id: 0,
        productName: '',
        price: 0,
    })
    //제품 고유번호 생성 상태값 정의하기
    const [productId, setProductId] = useState(5)
    // const handleProduct = (e) => {
    //     setProduct({ ...product, [e.target.productName]: e.target.value })
    // }

    const handleProduct = (e) => {
        const { name, value } = e.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }))
    }

    const handleSave = (e) => {
        setProducts([...products, product])
        setProductId({ ...product, [e.target.name]: e.target.value + 1 }) // 다음 ID 준비
    }
    const handleSelect = (selectedProduct) => {
        setProduct(selectedProduct)
    }

    const handleRemove = (removedProduct) => {
        setProducts((prevProducts) => prevProducts.filter((p) => p.id !== removedProduct.id))
    }

    return (
        <div>
            <br></br>
            신규 제품 등록 : 제품명:
            <input
                type="text"
                name="productName"
                value={product.productName}
                placeholder="제품명"
                onChange={handleProduct}
            />
            가격:
            <input type="text" name="price" value={product.price} placeholder="0" onChange={handleProduct} />
            <button onClick={handleSave}>저장</button>
            <hr></hr>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>선택</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p, i) => (
                        <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.productName}</td>
                            <td>{p.price}</td>
                            <td>
                                <button onClick={() => handleSelect(p)}>선택</button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(p)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
