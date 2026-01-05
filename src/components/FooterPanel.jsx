import React, { memo, useContext } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RiMenuSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ChangeCart';

function FooterPanel() {

    const {cart} = useContext(CartContext)

  return (
    <div className='*:m-0 *:p-0 *:box-border md:hidden px-5 py-2 bg-white border-t fixed w-full bottom-0 z-10 border-t-gray-500'>
        <ul className='flex items-center gap-5 justify-between'>
            <li className='w-11'>
                <Link className='flex flex-col justify-center items-center gap-1' to={"/"}>
                      <img src="/Group 2.svg" alt="" />
                      <h3 className='whitespace-nowrap text-sm text-center'>Главная</h3>
                </Link>
            </li>
              <li className='w-11'>
                  <Link className='flex flex-col justify-center items-center gap-1' to={"/"}>
                      <RiMenuSearchLine className='text-[35px] text-[#FF7010]' />
                      <h3 className='whitespace-nowrap text-sm text-center'>Каталог</h3>
                  </Link>
            </li>
              <li className='flex justify-center w-11'>
                  <Link className='flex flex-col justify-center items-center gap-1' to={"/cart"}>
                      <div className='relative'>
                          <MdOutlineShoppingCart className='text-[35px] text-[#FF7010]' />
                          <span className='absolute text-[14px] flex items-center justify-center text-white rounded-full border border-black w-4 pb-0.5 h-4 bg-[red] -top-1.5 -right-1.5'>{cart.length}</span>
                      </div>
                      <h3 className='whitespace-nowrap text-sm text-center'>Корзина</h3>
                  </Link>
            </li>
              <li className='w-11'>
                  <Link className='flex flex-col justify-center items-center gap-1' to={"/"}>
                      <FaRegHeart className='text-[30px] text-[#FF7010]' />
                      <h3 className='whitespace-nowrap text-sm text-center mt-1'>Любимые</h3>
                  </Link>
            </li>
              <li className='w-11'>
                  <Link className='flex flex-col justify-center items-center gap-1' to={"/"}>
                      <CgProfile className='text-[35px] text-[#FF7010]' />
                      <h3 className='whitespace-nowrap text-sm text-center'>Профиль</h3>
                  </Link>
            </li>


        </ul>
    </div>
  )
}

const FooterPanelMemo = memo(FooterPanel);

export default FooterPanelMemo