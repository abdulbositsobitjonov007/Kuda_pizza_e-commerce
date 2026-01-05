import React, { memo, useContext } from 'react'
import { LanguagesContext } from '../context/ChangeLang';

function Footer() {

    const { currLanguage } = useContext(LanguagesContext);

    return (
        <footer className='bg-white py-8 border-t border-gray-300 pb-25'>
            <div className='container mx-auto px-5 grid grid-cols-2 gap-10 md:grid-cols-3 lg:flex justify-between'>

                <div className='flex items-start whitespace-nowrap gap-2.5 '>
                    <img className='w-10' src="/Group 2.svg" alt="" /><a className='text-xl inline-block' href="">Куда пицца</a>
                </div>
                <ul className='flex flex-col gap-2 sm:gap-5'>
                    <li className='text-[20px] font-semibold pb-1.25'>Куда пицца</li>
                    <li><a href="">{currLanguage.company}</a></li>
                    <li><a href="">{currLanguage.userAcceptence}</a></li>
                    <li><a href="">{currLanguage.warrantyTerms}</a></li>
                </ul>
                <ul className='flex flex-col gap-2 sm:gap-5'>
                    <li className='text-[20px] font-semibold'>{currLanguage.restaurant}</li>
                    <li><a href="">{currLanguage.contacts}</a></li>
                    <li><a href="">{currLanguage.support}</a></li>
                    <li><a href="">{currLanguage.trackOrder}</a></li>
                </ul>
                <ul className='flex flex-col gap-2 sm:gap-5'>
                    <li className='text-[20px] font-semibold'>{currLanguage.contacts}</li>
                    <li><a className='flex items-center gap-2.5' href=""><img src="/Group 55.svg" alt="" />+7 (926) 223-10-11</a></li>
                    <li><a className='flex items-center gap-2.5' href=""><img src="/Location.svg" alt="" />{currLanguage.location}</a></li>
                    <span className='sm:flex items-center gap-2 sm:gap-5'>
                            <li><a className='flex items-center gap-2.5' href=""><img src="/Subtract.svg" alt="" />Facebok</a></li>
                            <li><a className='flex items-center gap-2.5' href=""><img src="/Vector.svg" alt="" />Instagram</a></li>
                        </span>
                    </ul>
            </div>
        </footer>
    )
}

const FooterMemo = memo(Footer);

export default FooterMemo;