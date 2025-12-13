import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/loader/Loader';
import { getProductDetails } from '../api/productDietaild';
import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import Footer from '../components/Footer';

function SingleProduct() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [mainProduct, setMainProduct] = useState(null)
    const { addToCart, toggleLike, wishlist, isLiked, isCart } = useShop();

    const size = ["s", "m", "l", "xl ", "xxl"]

    async function getDetail() {
        const productDetaild = await getProductDetails(id)

        setMainProduct(productDetaild.data.findProduct)

    }

    useEffect(() => {
        getDetail()
    }, [id]);



    return (
        <div className="w-full min-h-screen   ">
            {
                mainProduct !== null ? (
                    <div className='w-full min-h-[70vh] flex flex-col md:flex-row '>
                        <div className='md:h-full md:w-[50%] flex  justify-center items-center '>

                            <img src={mainProduct.imageUrl.replace("http://", "https://")} className='md:h-[80vh] ' alt="" />

                        </div>
                        <div className='md:h-[100%] md:w-[50%]  '>
                            <div className='min-h-fit md:h-[80vh] mt-3 w-full flex flex-col px-3 pr-3  justify-center items-start '>
                                <h1 className=' uppercase  w-full md:w-[60%] flex justify-between text-2xl'>
                                    {mainProduct.name}
                                    <button
                                        onClick={() => toggleLike(mainProduct._id)}
                                        className={`uppercase flex items-center border p-2  md:p-3   hover:bg-black hover:text-white
                                                                                      ${isLiked(mainProduct._id) ? "bg-black text-white"
                                                : "bg-white text-black"}`
                                        }
                                    >
                                        <Heart
                                            size={15}

                                        />
                                    </button>
                                </h1>
                                <p className=' uppercase text-sm font-mono'>
                                    {mainProduct.descraption}
                                </p>
                                <p className=' uppercase text-sm  '>
                                    <b>Rs.</b>{mainProduct.price}
                                </p>

                                <h1 className=' uppercase mt-4'>
                                    Select size
                                </h1>
                                <div className='w-fit gap-3 my-2 h-fit grid  grid-cols-6 '>
                                    {size.map((siz, i) => (

                                        <div key={i} className=' border border-black w-5 h-5 flex justify-center items-center p-6 md:px-10  hover:bg-black hover:text-white' >
                                            <h1 className=' uppercase'>{siz}</h1>
                                        </div>

                                    ))}
                                </div>

                                <div className='w-full md:w-[63%] '>
                                    <button className=' py-6 uppercase bg-black text-white w-full'
                                        onClick={() => addToCart(mainProduct._id)}
                                    >
                                        add
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : null
            }
             <Footer/>
        </div>
    );
}

export default SingleProduct;