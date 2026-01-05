import React, { memo, useContext } from 'react'
import { LanguagesContext } from '../context/ChangeLang';
import { CartContext } from '../context/ChangeCart';
import { Link } from 'react-router-dom';

function Header() {

const { setLanguage, currLanguage } = useContext(LanguagesContext);
const { cart } = useContext(CartContext);

let total = cart.reduce((acc, item) => acc + item.basePrice * item.qty, 0);

    return (
        <header className='bg-white sticky w-full top-0 z-10'>
            <div className=' '>
                <div className='container hidden mx-auto md:flex items-center justify-between px-5 py-2.5'>
                    <ul className='flex gap-10'>
                        <li className='flex gap-2.5'>
                            <img className='w-5' src="/Location.svg" alt="" />
                            <select className='outline-none'>
                                <option value="">Москва</option>
                                <option value="">Toshkent</option>
                                <option value="">New York</option>
                            </select>
                        </li>
                        <li>
                            {
                                currLanguage.checkAdd
                            }
                        </li>
                        <li>{
                            currLanguage.avgDelivery
                        }
                            <span>: 00:24:19</span></li>
                    </ul>
                    <ul className='flex gap-10'>
                        <li>{
                            currLanguage.workingHours
                        }</li>
                        <li className='flex gap-2.5'>
                            <img src="/Account.svg" alt="" />
                            <p>{currLanguage.login}</p></li>
                    </ul>
                </div>
                <hr className='border-t border-gray-300' />
                <div className='container mx-auto flex px-5 justify-between items-center py-3'>
                    <div className='flex whitespace-nowrap gap-2.5'>
                        <img src="/Group 2.svg" alt="" />
                        <Link to="/" className='text-xl'>Куда пицца</Link>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <span>
                            <select onChange={(e) => setLanguage(e.target.value)} className='outline-none p-2'>
                                <option value="ru">Ru</option>
                                <option value="uz">Uz</option>
                                <option value="en">En</option>
                            </select>
                        </span>
                        <button className='  bg-[#FF7010] rounded-md cursor-pointer text-white'>
                            <Link className='flex gap-4.5 py-2 px-4' to="/cart">
                                <div className='relative hidden md:flex'>
                                    <img src="/Shopping bag.svg" alt="" />
                                    <span className='absolute text-[14px] flex items-center justify-center rounded-full border border-black w-4 pb-0.5 h-4 bg-[red] -top-1.5 -right-1.5'>{cart.length}</span>
                                </div>
                                <span className='whitespace-nowrap'>{total} ₽</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className='border-t border-gray-300' />
            </div>
        </header>
    )
}


const HeaderMemo = memo(Header);

export default HeaderMemo