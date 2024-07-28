import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import bgHeader from '../../public/bg-header.png'
import arrow from '../../public/arrow-down.png'
import product from '../../public/product.png'

interface Props { }

const Products: NextPage<Props> = ({ }) => {
    return (
        <main>
            <Navbar floating />
            <section className="relative pt-[90px]">
                <Image src={bgHeader} className="absolute z-0 w-full h-full left-0 top-0 object-cover opacity-50" alt="Header Image" />
                <div className="py-20 relative z-10 container text-center">
                    <h1 className="text-5xl font-urban font-light mb-6">Products Catalogue</h1>
                    <p className="mb-4 mx-auto lg:w-1/2 italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fugiat fugit molestiae magni accusamus amet
                        ipsa iste aliquam, similique, ratione nulla ullam beatae non. Quae repellendus qui deleniti voluptatibus nisi?</p>
                    <button className="font-bold text-primary">
                        Show More
                        <div className="flex justify-center mt-1">
                            <Image src={arrow} alt='Arrow Down' />
                        </div>
                    </button>

                </div>
            </section>
            <section className='py-20 container'>
                <div className="flex justify-center mb-10">
                    <button className='pb-2 border-b border-gray-300 px-4 hover:text-primary transition hover:border-primary'>
                        Treatment
                    </button>
                    <button className='pb-2 border-b border-gray-300 px-4 hover:text-primary transition hover:border-primary'>
                        Products
                    </button>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <div className='w-16 h-16 flex justify-center items-center rounded-full border-primary border-4'></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className='grid grid-cols-2 rounded-xl bg-primary bg-opacity-10'>
                        <div className='p-6'>
                            <h3 className='font-urban font-bold text-lg mb-4'>Black Doll Laser</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Id semper fusce massa sit at auctor magnis. Purus ornare accumsan diam morbi magna. Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <Image src={product} className='w-full h-full object-cover rounded-xl' alt="Product" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Products