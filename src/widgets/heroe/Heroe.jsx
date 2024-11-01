

import { useState } from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline'
import { HeroePhone } from './HeroePhone'

import { Logo } from '../Logo/Logo'
import { Link } from 'react-router-dom'


const navigation = [


    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
]

export const Heroe = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const OpenClose = () => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false)
        }
        else {
            setMobileMenuOpen(true)
        }
    }
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                   <Logo/>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 transition-transform duration-3000 transform hover:scale-125 hover:text-green-400 font-semibold text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to='/login' className="text-sm/6 font-semibold text-white hover:hover:text-green-400 hover:scale-125">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                        <HeroePhone mobileMenuOpen={mobileMenuOpen} OpenClose={OpenClose} navigation={navigation}/>
            </header>
        </div>
    )
}
