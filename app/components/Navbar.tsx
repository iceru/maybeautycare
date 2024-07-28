import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import login from '../../public/login.png'

interface Props {
    floating: boolean
}

const Navbar: NextPage<Props> = ({ floating }) => {
    return (
        <nav className={`flex justify-between items-center container mx-auto py-4 ${floating ? 'absolute top-0 left-1/2 -translate-x-1/2 z-20 w-screen' : ''}`}>
            <div>
                <Image width={56} height={58} src="/Logo.png" alt='May Beauty Care Logo' />
            </div>
            <ul className='flex items-center gap-8'>
                <li>
                    <Link href="/">
                        Homepage
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/members">
                        Members
                    </Link>
                </li>
            </ul>
            <div className='flex items-center'>
                <Link href="/members">
                    <Image className='w-5 h-5' src={login} alt="Login" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar