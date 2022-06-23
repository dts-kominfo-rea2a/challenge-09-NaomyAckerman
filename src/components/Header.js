// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css';
import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<h1 className="header__title">Call a Friend</h1>
			<p>your friendly contact app</p>
		</header>
	);
};

export default Header;
