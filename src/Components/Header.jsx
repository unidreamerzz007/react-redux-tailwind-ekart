import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({insideHome}) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to='/'>
        <i className='fa-solid fa-truck-fast me-1'></i>E cart
      </Link>
      <ul className='flex-1 text-right'>
        {insideHome &&
          <li className='list-none inline-block px-5'>
          <label htmlFor="search" className="sr-only">Search Products</label>
          <input
            id="search"
            style={{ width: '300px' }}
            className='rounded p-2 text-black placeholder-gray-400'
            type='text'
            placeholder='Search Products Here...'
          />
        </li>
        }
        <li className='list-none inline-block px-5'>
          <Link to='/wishlist'>
            <i className='fa-solid fa-heart text-red-600'></i>
            <span> Wishlist </span>
            <span className='bg-black text-white rounded p-1'>{wishlistCount}</span>
          </Link>
        </li>
        <li className='list-none inline-block px-5'>
          <Link to='/cart'>
            <i className='fa-solid fa-cart-plus text-green-600'></i>
            <span> Cart </span>
            <span className='bg-black text-white rounded p-1'>{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;