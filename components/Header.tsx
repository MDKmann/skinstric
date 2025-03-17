import Image from 'next/image'
import leftHug from '../public/Rectangle 2710.svg'
import rightHug from '../public/Rectangle 2711.svg'

const Header = () => {
    return (
        <header className="w-full h-16 grid grid-cols-2 grid-rows-1 items-center">
            <div className='flex'>
                <a href="">SKINSTRIC</a>
                <a href="" className='flex'>
                    <Image src={leftHug} alt="" />
                    INTRO
                    <Image src={rightHug} alt="" />
                </a>
            </div>
            <div className='flex justify-end'>
                <button>
                    Enter Code
                </button>
            </div>


        </header>
    )
}

export default Header;