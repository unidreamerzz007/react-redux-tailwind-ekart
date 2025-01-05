import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className='px-5'>
        <>
          <h1 className='text-5xl font-bold text-blue-600 '>Cart Summary</h1>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='col-span-2 border rounded p-5 shadow'>
              <table className='table-auto w-full'>

                <thead>
                  <tr>
                    <td className='font-semibold'>#</td>
                    <td className='font-semibold'>Name</td>
                    <td className='font-semibold'>Image</td>
                    <td className='font-semibold'>Quantity</td>
                    <td className='font-semibold'>Price</td>
                    <td className='font-semibold'>...</td>

                  </tr>
                </thead>
                {/* 2hrs 33min */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>product name</td>
                    <td> <img width={'70px'} height={'70px'}  src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" /> </td>
                    <td>
                      <div>  
                        <button className='font-bold'>-</button>
                        <input style={{width:'40px'}} type="text" className='border p-1 rounded mx-2' value={2} readOnly />
                        <button className='font-bold'>+</button>

                      </div>
                    </td>
                    <td>$100</td>
                    <td> <button className='text-red-600'>  <i class='fa-solid fa-trash'></i>  </button> </td>
                  </tr>
                </tbody>

              </table>
              <div className='float-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white'> Empty Cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More..</Link>

              </div>
             
            </div>
            <div className='col-span-1'>
                <div className='border rounded shadow p-5'>
                  <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$9.99 </span></h2><hr/>
                  <button className='bg-green-600 rounded p-2 text-white w-full mt-4' >Check Out</button>

                </div>
              </div>
          </div>
        </>

      </div>
    </>
  )
}

export default Cart