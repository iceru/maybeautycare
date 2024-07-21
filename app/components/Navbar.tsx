import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
                    <Link href="/testimony">
                        Testimony
                    </Link>
                </li>
                <li>
                    <Link href="/members">
                        Members
                    </Link>
                </li>
            </ul>
            <div className='flex items-center'>

            </div>
        </nav>
    )
}

export default Navbar