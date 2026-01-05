import React, { useContext } from 'react'
import { CartContext } from '../context/ChangeCart';

function Card({ id, image, title, basePrice, addToCart, increase, decrease }) {

    const { cart } = useContext(CartContext);

  return (
      <div key={id} className='bg-white flex gap-5 rounded-lg shrink-0 max-w-125 w-full h-50 border border-gray-300 p-5 mb-7'>
          <img src={image} alt={title} className='w-27 h-27 lg:w-35 lg:h-35  rounded-md' />
          <div className='flex flex-col justify-between w-full'>
              <div>
                  <h3 className='text-xl font-semibold w-full line-clamp-2 mt-3 xl:mt-10'>{title}</h3>

              </div>
              <div className='flex justify-end'>
                  <div className='flex flex-col xl:flex-row items-center gap-1 xl:gap-5 justify-between'>
                      <div>
                          <p className='text-[#FF7010] text-lg whitespace-nowrap font-bold'>{basePrice} ₽</p>
                      </div>
                      <div>
                          {
                              cart.find((el) => el.id === id) ?
                                  (<div className='flex border-[#FF7010] rounded-md'>
                                      <button onClick={() => decrease(id)} className='bg-[#FF7010] cursor-pointer text-white w-8.5 h-12 rounded rounded-r-none'>
                                          -
                                      </button>
                                      <span className='bg-[#ffffff] cursor-pointer text-[#FF7010] border w-8.5 h-12 flex items-center justify-center'>
                                          {cart.find((el) => el.id === id).qty}
                                      </span>
                                      <button onClick={() => increase(id)} className='bg-[#FF7010] cursor-pointer text-white w-8.5 h-12 rounded rounded-l-none'>
                                          +
                                      </button>
                                  </div>)
                                  :
                                  (<button onClick={() => addToCart(id)} className='bg-[#FF7010] cursor-pointer text-white w-27.5 h-12 rounded'>Add to Cart</button>)
                          }

                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card