"use client"
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Banner {
    id: string;
    title: string;
    image: {
        type: string;
        data: number[];
    };
}
interface Props { }


const Gallery: NextPage<Props> = () => {
    const [banners, setBanners] = useState<Banner[]>([]);

    const fetchBanners = async () => {
        try {
            const response = await fetch('http://localhost:3100/api/banner');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data: Banner[] = await response.json();
            setBanners(data);
        } catch (error: any) {
            console.log(error || 'error')
        }
    };

    useEffect(() => {
        fetchBanners();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className='py-20'>
            <Carousel responsive={responsive} infinite arrows={false} autoPlay autoPlaySpeed={3000}>
                {
                    banners && banners.map((banner) => (
                        <div key={banner.id} className='h-[300px] px-2'>
                            <img className='w-full h-full object-cover' src={`http://localhost:3100/api/banner/image/${banner.title}`} alt={banner.title} />
                        </div>
                    ))
                }
            </Carousel>
        </section>
    )
}

export default Gallery