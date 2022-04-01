import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import "./product.css"
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>

            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1632861342000" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>

                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">In Stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="productBottom">
            <form className='productForm'>
                <div className="productFormLeft">
                    
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods' />

                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select name="active" id="idActive">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>

                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1632861342000" alt="" className="productUploadImg" />

                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>

            </form>
        </div>
    </div>
  )
}
