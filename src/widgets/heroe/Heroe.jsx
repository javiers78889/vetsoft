

import { useState } from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline'
import { HeroePhone } from './HeroePhone'
import dog from '../../assets/dog.svg'

const navigation = [


    { name: 'Producto', href: '#' },
    { name: 'Tarifas', href: '#' },
    { name: 'Clientes', href: '#' },
    { name: 'Contacto', href: '#' },
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
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={dog}
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>
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
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                        <HeroePhone mobileMenuOpen={mobileMenuOpen} OpenClose={OpenClose} navigation={navigation}/>
            </header>
        </div>
    )
}
