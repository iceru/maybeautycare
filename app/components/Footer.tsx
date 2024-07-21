import { NextPage } from 'next'
import Image from 'next/image'
import logo from '../../public/logo-white.png'

interface Props { }

const Footer: NextPage<Props> = ({ }) => {
    return <footer className='bg-primary text-white'>
        <div className="container flex justify-between py-10">
            <div className='flex gap-4 items-center'>
                <Image src={logo} alt="May Beauty Care" />
                <div className='text-sm'>
                    Ruko BizStreet W 08/136, <br /> Jl. Villaggio Boulevard Timur,<br /> RW.010,
                    Ciakar, Kec. Panongan, <br />
                    Kabupaten Tangerang, Banten 15711
                </div>
            </div>
        </div>
    </footer>
}

export default Footer