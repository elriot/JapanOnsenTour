import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarMenuItem from '../components/NavbarMenuItem';
import MobileMenuButton from '../components/MobileMenuButton';
import DropdownMenu from '../components/DropdownMenu';

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState(null);
	const location = useLocation();
  const currentPath = location.pathname;

	const toggleMenu = (menuName) => {
   		setOpenMenu(openMenu === menuName ? null : menuName); 
	};

	return (
		<nav className="page-content-text header-bg fixed w-full z-50">
			<div className={`max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4`}>

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
					<ul className="flex flex-col font-medium header-menu-item-bg p-2 md:p-0 mt-4 border border-gray-300 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
						<li>
							<NavbarMenuItem 
								to="/" 
								label="Home" 
								className="header-menu-item-hover"
								onLinkClick={() => {setOpenMenu(null); setIsMobileMenuOpen(false);}
							}/>
						</li>

						{/* Onsen 101 - subs : [ What is Onsen, Health Benefit ]  */}
						<li className="relative">
							<button
								onClick={() => toggleMenu('onsen')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded header-menu-item-hover md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								<p className={['/onsen', '/health'].some(path => currentPath.includes(path)) ? "currentpage-underline" : ""}>
  								Onsen 101
								</p>
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{openMenu == 'onsen' && 
								<DropdownMenu items={[
									{ to: '/onsen', label: 'What is Onsen?' },
									{ to: '/health', label: 'Health Benefit' },
									]}
									onLinkClick={() => {setOpenMenu(null); setIsMobileMenuOpen(false);}}
									className="header-menu-item-hover"
								/>
							}
            			</li>
						<li className="relative">
							<button
								onClick={() => toggleMenu('beforeYouGo')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded header-menu-item-hover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								<p className={['/etiquette', '/tattoo','/accomodation','/packing'].some(path => currentPath.includes(path)) ? "currentpage-underline" : ""}>
									Before You Go
								</p>
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
									]}
									onLinkClick={() => {setOpenMenu(null); setIsMobileMenuOpen(false);}}
									className="header-menu-item-hover"  
								/>
							}
            			</li>

						<li className="relative">
							<button
								onClick={() => toggleMenu('topThreeTown')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded header-menu-item-hover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								<p className={['/kusatsu', '/arima','/gero'].some(path => currentPath.includes(path)) ? "currentpage-underline" : ""}>
									Top 3 Onsen Town
								</p>
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{openMenu == 'topThreeTown' && 
								<DropdownMenu items={[
										{ to: '/kusatsu', label: 'Kusatsu Onsen' },
										{ to: '/arima', label: 'Arima Onsen' },
										{ to: '/gero', label: 'Gero Onsen' },
									]}
									onLinkClick={() => {setOpenMenu(null); setIsMobileMenuOpen(false);}}
									className="header-menu-item-hover"  
								/>
							}
						</li>

						<li className="relative">
							<button
								onClick={() => toggleMenu('tips')}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded header-menu-item-hover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								<p className={['/seasons', '/transportation','/guide', '/extra'].some(path => currentPath.includes(path)) ? "currentpage-underline" : ""}>
									Onsen Travel Tips
								</p>
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{openMenu == 'tips' && 
								<DropdownMenu items={[
										{ to: '/seasons', label: 'Best Seasons' },
										{ to: '/transportation', label: 'Transportation' },
										{ to: '/localtours', label: 'Private Tour & Local Guide' },
										{ to: '/extra', label: 'Small Extras' },
									]}
									onLinkClick={() => {setOpenMenu(null); setIsMobileMenuOpen(false);}}
									className="header-menu-item-hover"  
								/>
							}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;