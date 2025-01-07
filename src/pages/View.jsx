import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {
  const {id}=useParams()
  const {allProducts}=useSelector(state=>state)
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://cdn-bjpdk.nitrocdn.com/dyjDRTumiVVFLKEpXMADzKdEUUbypNrL/assets/images/optimized/rev-0418da3/www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg" alt="" />

          
          <div >
            <h3 className='font-bold'>ID:id</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$250</h4>
            <h4>Brand : brand</h4>
            <h4>Category: category</h4>
            <p>
              <span className='font-bold'>Description</span>: Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. Laboriosam molestiae laborum, mollitia quidem 
              repudiandae natus nobis! Soluta, dolores dolore possimus repellendus officia magnam non dolorem ratione nobis, unde tenetur culpa?
            </p>
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>

            </div>
          </div>


        </div>l
        

      </div>
    </>
  )
}

export default View

