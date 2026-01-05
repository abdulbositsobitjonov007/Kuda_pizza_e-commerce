import React, { useContext } from 'react'
import { CartContext } from '../../context/ChangeCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import useGet from '../../hooks/useGet';


import 'swiper/css/pagination';

function CartPage() {

    const { cart, increase, decrease } = useContext(CartContext);
    const { data: products } = useGet("products");
    const { addToCart } = useContext(CartContext);


    return (
        <>
            <section className=' py-15 bg-gray-100 px-5'>
                <div className='max-w-225 w-full mx-auto'>
                    <h2 className='text-4xl font-bold pb-10'>Ваш заказ</h2>
                    <div className='flex flex-col gap-3'>
                        {cart.length <= 0 ? <div className='flex flex-col justify-center items-center pt-25 gap-5'>
                            <div>
                                <img className='w-60 rounded-4xl' src="public/image_processing20201106-11709-18misc6.gif" alt="" />
                            </div>
                            <h1 className='text-2xl pb-25 font-semibold'>Корзина пуста</h1>
                        </div> :
                            cart.map(item => (
                                <div key={item.id} className='flex flex-col gap-5 items-start sm:flex-row w-full sm:h-32 bg-white sm:justify-between rounded-2xl sm:items-center border-b border-gray-300 py-5 sm:py-0 px-5'>
                                    <div className='flex w-full gap-5 items-center'>
                                        <img className='w-20' src={item.image} alt={item.name} />

                                        <div className='w-full'>
                                            <h3 className='text-[22px] md:text-[26px] xl:text-[32px] w-full'>{item.title}</h3>
                                            
                                        </div>
                                    </div>
                                    <div className='flex justify-between sm:justify-end w-full gap-10 items-center'>
                                        <div className='flex gap-6.5 border-4 text-[30px] text-[#FF7010] border-[#FF7010] rounded-md px-3 lg:py-2.5 bg-[#ff88003e]'>
                                            <button onClick={() => decrease(item.id)} className='cursor-pointer lg:w-8 lg:h-8 flex items-center justify-center'>-</button>
                                            <span className='text-[25px] flex items-center justify-center'>{item.qty}</span>
                                            <button onClick={() => increase(item.id)} className='cursor-pointer lg:w-8 lg:h-8 flex items-center justify-center'>+</button>
                                        </div>
                                        <h2 className='w-25.5 pr-5 whitespace-nowrap text-xl font-semibold text-[#FF7010]'>{item.basePrice * item.qty} ₽</h2>
                                    </div>

                                </div>
                            ))
                        }
                        <div className='flex justify-between items-center bg-white h-20 px-5 rounded-2xl border border-gray-300'>
                            <div className='flex w-full gap-3.5'>
                                <input className='outline-none border border-gray-300 max-w-62.5  w-full h-12 rounded-md px-3' placeholder='Промокод' type="text" />
                                <button className='bg-[#FF7010] cursor-pointer w-12 flex items-center justify-center text-white h-12 rounded-md p-2'><img src="/Send.svg" alt="" /></button>
                            </div>
                            <h2 className='whitespace-nowrap text-xl font-semibold text-[#FF7010] text-end'>Итого: {cart.reduce((acc, item) => acc + item.basePrice * item.qty, 0)} ₽</h2>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-semibold'>Добавить к заказу?</h1>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[ Autoplay]}
                            className="mySwiper"
                        >
                            {
                                products.filter((res) => res.categoryId === "4").length === 0 ? (
                                    <div className="p-10 text-center">Нет товаров для этой категории.</div>
                                ) : (
                                    products.filter((res) => res.categoryId === "4").map((product) => (
                                        <SwiperSlide key={product.id}>
                                            <div className='bg-white mt-10 rounded-lg shrink-0 max-w-95 w-full border border-gray-300 p-5 '>
                                                <img src={product.image} alt={product.title} className='w-full h-47.5 object-cover rounded-md' />
                                                <h3 className='text-xl font-semibold line-clamp-1 mt-2'>{product.title}</h3>
                                                <div className='flex items-center justify-between mt-5'>

                                                    <div className='w-full'>
                                                        <div className='w-full'>
                                                            {
                                                                cart.find((el) => el.id === product.id) ?
                                                                    (<div className='flex w-full border-[#FF7010] rounded-md'>
                                                                        <button onClick={() => { addToCart(product.id); decrease(product.id); }} className='bg-[#FF7010] font-semibold cursor-pointer text-white w-full h-12 rounded rounded-r-none'>
                                                                            -
                                                                        </button>
                                                                        <span className='bg-[#ffffff] cursor-pointer text-[#FF7010] border w-full h-12 flex items-center justify-center'>
                                                                            {cart.find((el) => el.id === product.id).qty}
                                                                        </span>
                                                                        <button onClick={() => increase(product.id)} className='bg-[#FF7010] font-semibold cursor-pointer text-white w-full h-12 rounded rounded-l-none'>
                                                                            +
                                                                        </button>
                                                                    </div>)
                                                                    :
                                                                    (<button onClick={() => addToCart(product.id)} className='bg-[#FF7010] max-w-100 w-full font-semibold cursor-pointer text-white h-12 rounded'>{product.basePrice} ₽</button>)
                                                            }

                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )
                            }
                        </Swiper>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl font-semibold'>Соусы</h1>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                products.filter((res) => res.categoryId === "8").length === 0 ? (
                                    <div className="p-10 text-center">Нет товаров для этой категории.</div>
                                ) : (
                                    products.filter((res) => res.categoryId === "8").map((product) => (
                                        <SwiperSlide key={product.id}>
                                            <div className='bg-white mt-10 rounded-lg shrink-0 max-w-95 w-full border border-gray-300 p-5 '>
                                                <img src={product.image} alt={product.title} className='w-full h-47.5 object-cover rounded-md' />
                                                <h3 className='text-xl font-semibold line-clamp-1 mt-2'>{product.title}</h3>
                                                <div className='flex items-center justify-between mt-5'>

                                                    <div className='w-full'>
                                                        <div className='w-full'>
                                                            {
                                                                cart.find((el) => el.id === product.id) ?
                                                                    (<div className='flex w-full border-[#FF7010] rounded-md'>
                                                                        <button onClick={() => { addToCart(product.id); decrease(product.id); }} className='bg-[#FF7010] font-semibold cursor-pointer text-white w-full h-12 rounded rounded-r-none'>
                                                                            -
                                                                        </button>
                                                                        <span className='bg-[#ffffff] cursor-pointer text-[#FF7010] border w-full h-12 flex items-center justify-center'>
                                                                            {cart.find((el) => el.id === product.id).qty}
                                                                        </span>
                                                                        <button onClick={() => increase(product.id)} className='bg-[#FF7010] font-semibold cursor-pointer text-white w-full h-12 rounded rounded-l-none'>
                                                                            +
                                                                        </button>
                                                                    </div>)
                                                                    :
                                                                    (<button onClick={() => addToCart(product.id)} className='bg-[#FF7010] max-w-100 w-full font-semibold cursor-pointer text-white h-12 rounded'>{product.basePrice} ₽</button>)
                                                            }

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )
                            }
                        </Swiper>
                    </div>
                    <form action="">
                        <div className='mt-10'>
                            <h1 className='text-2xl font-semibold'>О вас</h1>
                            <div className='flex flex-wrap md:flex-nowrap items-center w-full justify-between gap-5 mt-5'>
                                <div className='w-full flex flex-col gap-3'>
                                    <label className='text-gray-500' htmlFor="name">Имя*</label>
                                    <input id='name' className='w-full pl-5 h-12 rounded-xl  border-gray-300 border outline-none bg-white' type="text" placeholder='Введите ваше имя' />
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <label className='text-gray-500' htmlFor="phone">Номер телефона*</label>
                                    <input id='phone' className='w-full pl-5 h-12 rounded-xl border-gray-300 border outline-none bg-white' type="text" placeholder='Введите номер телефона' />
                                </div>
                                <div className='w-full flex flex-col gap-3'>
                                    <label className='text-gray-500' htmlFor="email">Почта</label>
                                    <input id='email' className='w-full pl-5 h-12 rounded-xl border-gray-300 border outline-none bg-white' type="text" placeholder='Введите почту' />
                                </div>
                            </div>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div>
                            <div className='flex flex-wrap sm:flex-nowrap items-center justify-between gap-5 w-full mb-5'>
                                <h1 className='text-2xl font-semibold'>Доставка</h1>
                                <div className='flex max-w-87 w-full bg-white rounded-xl'>
                                    <button className='w-full max-w-43.75 h-12 rounded-xl bg-[#FF7010] text-white'>Доставка</button>
                                    <button className='w-full max-w-43.75 h-12 rounded-xl'>Самовывоз</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex flex-col gap-3 mb-5'>
                                    <label className='text-gray-500' htmlFor="street">Улица*</label>
                                    <input id='street' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                </div>
                                <div className='flex gap-5 mb-5 w-full flex-wrap md:flex-nowrap'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-gray-500' htmlFor="house">Дом</label>
                                        <input id='house' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-gray-500' htmlFor="entrance">Подъезд</label>
                                        <input id='entrance' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-gray-500' htmlFor="floor">Этаж</label>
                                        <input id='floor' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-gray-500' htmlFor="apartment">Квартира</label>
                                        <input id='apartment' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-gray-500' htmlFor="intercom">Домофон</label>
                                        <input id='intercom' className='w-full pl-5 h-12 rounded-md border-gray-300 border outline-none bg-white' type="text" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-gray-500'>Когда выполнить заказ?</h2>
                                    <div className='flex flex-wrap gap-5 mt-3'>
                                        <div className='flex items-center gap-2'>
                                            <input id='asap' className='w-4 h-4' type="radio" />
                                            <label htmlFor="asap">Как можно скорее</label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input id='scheduled' className='w-4 h-4' type="radio" />
                                            <label htmlFor="scheduled">По времени</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div>
                            <h2 className='font-semibold text-2xl'>Оплата</h2>
                            <div className='flex flex-wrap gap-5 mt-3'>
                                <div className='flex items-center gap-2'>
                                    <input className='w-4 h-4' type="radio" id="payment1" name="payment" />
                                    <label htmlFor="payment1">Наличными</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input className='w-4 h-4' type="radio" id="payment2" name="payment" />
                                    <label htmlFor="payment2">Картой</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input className='w-4 h-4' type="radio" id="payment3" name="payment" />
                                    <label htmlFor="payment3">Apple Pay</label>
                                </div>
                            </div>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div>
                            <h2 className='font-semibold text-2xl'>Сдача</h2>
                            <div className='flex flex-wrap gap-5 mt-3'>
                                <div className='flex items-center gap-2'>
                                    <input className='w-4 h-4' type="radio" id="change1" name="change" />
                                    <label htmlFor="change1">Без сдачи</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <input className='w-4 h-4' type="radio" id="change2" name="change" />
                                        <label htmlFor="change2">Сдача с</label>
                                    </div>
                                    <input className='w-36 h-12 border border-gray-300 bg-white rounded-md p-2' placeholder='0                        ₽' type="text" id="change2" name="change" />
                                </div>
                            </div>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div>
                            <h2 className='font-semibold text-2xl mb-5'>Комментарий</h2>
                            <div>
                                <input className='w-full h-32 border flex pb-20 pl-5 border-gray-300 bg-white rounded-md p-2' type="text" name="comment" id="comment" placeholder='Ваш комментарий' />
                            </div>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div className='flex items-center justify-between mb-10'>
                            <h2 className='font-semibold whitespace-nowrap text-[#FF7010] text-xl md:text-2xl mb-5'>Итого: {cart.reduce((acc, item) => acc + item.basePrice * item.qty, 0)} ₽</h2>
                            <button className='w-44.5 h-12 bg-[#FF7010] text-white rounded-md'>Оформить заказ</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CartPage