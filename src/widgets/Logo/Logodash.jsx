import dog from '../../assets/finger.svg'
import { Link } from 'react-router-dom'

export const Logodash = () => {
  return (
    <div className="flex lg:flex-1">
            <Link to='/dashboard' className="-m-1.5 p-1.5 flex items-center">

                <span className='text-green-600 text-4xl font-bold '>Vet-</span><span className='text-3xl font-semibold'>Soft</span>
                <img className='h-8 w-auto' src={dog} alt="" />
            </Link>
        </div>
  )
}
