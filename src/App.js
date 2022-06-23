import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import contacts from './data/contacts.json';
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
	// Masukkan Header dan Contact ke dalam div App
	return (
		<div className="App">
			<Header />
			<hr className="devider" />
			{contacts.map((contact, index) => (
				<Contact data={contact} key={index} />
			))}
		</div>
	);
};

export default App;
