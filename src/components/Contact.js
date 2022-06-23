// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = ({ data: { name, email, photo, phone } }) => {
	return (
		<div className="contact">
			<img src={photo} alt={name} className="contact__image" />
			<div className="contact__info">
				<h5>{name}</h5>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Contact;
