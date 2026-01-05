import React, { useContext, useState } from 'react'
import './home.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Card from '../../components/Card';
import useGet from '../../hooks/useGet';
import { CartContext } from '../../context/ChangeCart';

function Home() {

    const { cart, increase, decrease, addToCart } = useContext(CartContext);
    const { data: categories } = useGet("categories");
    const { data: products } = useGet("products");
    const [selectedCategory, setSelectedCategory] = useState("2");



    return (
        <section className='py-7.5 relative px-5'>
            <div className='container mx-auto'>
                {/* {Categories} */}
                <div className='flex items-center justify-between overflow-x-scroll gap-5'>
                    {categories.map((el) => (
                        <div onClick={() => setSelectedCategory(el.id)} key={el.id} className='flex flex-col shrink-0 cursor-pointer items-center bg-white w-33.75 h-26 justify-center border border-gray-300 rounded-lg'>
                            <img src={el.icon} alt={el.title} className='w-8 h-8 object-cover' />
                            <h3 className='text-lg mt-2'>{el.title}</h3>
                        </div>
                    ))}
                </div>
                {/* {Products} */}
                <div className='flex gap-5 pt-7.5 w-full'>


                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,

                        }}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {products.filter((res) => res.categoryId === selectedCategory).map((product) => (
                            <SwiperSlide key={product.id}>
                                <Card addToCart={addToCart} increase={increase} decrease={decrease} {...product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                {/* {Check Delivery} */}
                <div className='bg-white flex flex-col md:flex-row gap-5 md:gap-7 md:items-center rounded-lg border border-gray-300 p-5 mt-10'>
                    <h1 className='text-[18px]  whitespace-nowrap'>Проверить адрес доставки</h1>
                    <div className='flex gap-5 w-full'>
                        <span className='flex w-full'><img className='border px-3.5 border-gray-300 border-r-0 rounded-l-md' src="/Location.svg" alt="" /><input className='outline-none border border-l-0 rounded-l-none border-gray-300 h-12 rounded-md  w-full' placeholder='Адрес' type="text" /></span>
                        <button className='bg-[#FF7010] cursor-pointer max-w-27 md:max-w-37.5 w-full text-white h-12 rounded-md p-2'>Проверить</button>
                    </div>
                </div>
                {/* {All Products} */}
                <div className='my-10'>
                    <div>
                        {
                            categories.map((el) => {
                                return (
                                    <div className='my-10 ' key={el.id}>
                                        <h1 className='text-[40px] pb-5'>{el.title}</h1>
                                        <div className='grid gap-2.5 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                            {products.filter((res) => res.categoryId === el.id).map((product) => (
                                                <div key={product.id} className='bg-white z-1 rounded-lg shrink-0 max-w-95 w-full border border-gray-300 p-2 sm:p-5 '>
                                                    <img src={product.image} alt={product.title} className='w-full h-40 sm:h-60 lg:h-65 object-cover rounded-md' />
                                                    <h3 className='text-xl font-semibold line-clamp-1 mt-2'>{product.title}</h3>
                                                    <div className='flex flex-col'>
                                                        <div className='flex flex-col-reverse sm:flex-row h-full items-start sm:items-center justify-between gap-2 mt-5'>

                                                            <div className='w-full'>
                                                                {
                                                                    cart.find((el) => el.id === product.id) ?
                                                                        (<div className='flex border-[#FF7010] w-full rounded-md'>
                                                                            <button onClick={() => { addToCart(product.id); decrease(product.id); }} className='bg-[#FF7010] w-full cursor-pointer text-white sm:max-w-8.5 h-12 rounded rounded-r-none'>
                                                                                -
                                                                            </button>
                                                                            <span className='bg-[#ffffff] cursor-pointer w-full text-[#FF7010] border sm:max-w-8.5 h-12 flex items-center justify-center'>
                                                                                {cart.find((el) => el.id === product.id).qty}
                                                                            </span>
                                                                            <button onClick={() => increase(product.id)} className='bg-[#FF7010] w-full cursor-pointer text-white sm:max-w-8.5 h-12 rounded rounded-l-none'>
                                                                                +
                                                                            </button>
                                                                        </div>)
                                                                        :
                                                                        (<button onClick={() => addToCart(product.id)} className='bg-[#FF7010] w-full cursor-pointer text-white sm:max-w-27.5 h-12 rounded'>Add to Cart</button>)
                                                                }

                                                            </div>

                                                            <p className='text-[#FF7010] text-lg whitespace-nowrap font-bold'>от {product.basePrice} ₽</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* {Publishing} */}
                <div className=''>
                    <div className='absolute flex items-end pb-10 bottom-0 left-0 w-full h-[9%] bg-linear-to-b from-transparent to-white rounded-b-lg'>
                        <h3 className='max-w-212.5 text-[#FF7010] text-[20px] font-bold w-full mx-auto mt-154 px-5 '>Показать полностью</h3>
                    </div>
                    <h1 className='max-w-212.5 w-full mx-auto text-[32px] pb-5'>Доставка пиццы в Москве</h1>
                    <p className='max-w-212.5 w-full mx-auto'>
                        Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
                        <br /><br />
                        Как сделать заказ<br />
                        Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home