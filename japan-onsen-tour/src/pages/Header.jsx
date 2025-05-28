import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatIsOnsen from './WhatIsOnsen';

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<nav className="bg-white fixed w-full z-50">
			<div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="/" className="flex items-center space-x-3 ">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-black no-underline">
						Japan Onsen Tour
					</span>
				</Link>

				{/* Mobile menu button (Hamburger) */}
				<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>

				{/* Menu */}
				<div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto `} id="navbar-dropdown">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-300 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
						<li>
							<Link to="/" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
								Home
							</Link>
						</li>

						{/* Onsen 101 - subs : [ What is Onsen, Health Benefit ]  */}
						<li className="relative">
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								// onMouseOver={() => setIsDropdownOpen(!isDropdownOpen)}
								className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
							>
								Onsen 101
								<svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>

							{isDropdownOpen && (
							<div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-300 divide-gray-600 absolute mt-1">
								<ul className="py-2 text-sm text-gray-200">
									<li>
										<Link to="/onsen" className="block px-4 py-2 hover:bg-gray-100 ">
											What is Onsen?
										</Link>
									</li>
									<li>
										<Link to="/health" className="block px-4 py-2 hover:bg-gray-100">
											Health Benefit
										</Link>
									</li>
								</ul>
							</div>
							)}
						</li>
						{/* Onsen 101 menu Done */}

					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;