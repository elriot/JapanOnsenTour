import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatIsOnsen from './WhatIsOnsen';
import NavbarMenuItem from '../components/NavbarMenuItem';
import MobileMenuButton from '../components/MobileMenuButton';
import DropdownMenu from '../components/DropdownMenu';

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState(null);

	const toggleMenu = (menuName) => {
   		setOpenMenu(openMenu === menuName ? null : menuName); 
	};

	return (
		<nav className="bg-white fixed w-full z-50">
			<div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

				{/* Title */}
				<Link to="/" className="flex items-center space-x-3 ">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-black no-underline">
						Japan Onsen Tour
					</span>
				</Link>

				{/* Mobile menu button (Hamburger) */}
				<MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

				{/* Menu */}
				<div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto `} id="navbar-dropdown">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-300 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
						<li>
							<NavbarMenuItem to="/" label="Home"/>
						</li>

						{/* Onsen 101 - subs : [ What is Onsen, Health Benefit ]  */}
						<li className="relative">
							<button
								onClick={() => toggleMenu('onsen')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								Onsen 101
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{openMenu == 'onsen' && 
								<DropdownMenu items={[
									{ to: '/onsen', label: 'What is Onsen?' },
									{ to: '/health', label: 'Health Benefit' }
								]} />
							}
            			</li>
						<li className="relative">
							<button
								onClick={() => toggleMenu('beforeYouGo')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								Before You Go
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{openMenu == 'beforeYouGo' && 
								<DropdownMenu items={[
									{ to: '/etiquette', label: 'Onsen Etiquette' },
									{ to: '/tattoo', label: 'Things to Know About Tattoos' },
									{ to: '/accomodation', label: 'Hotel & Ryokan Types' },
									{ to: '/packing', label: 'Packing Essentials' },
								]} />
							}
            			</li>

					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;