import React from 'react';
import { nanoid } from 'nanoid'

import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'
import { Filter } from './Filter/Filter'

export class App extends React.Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	}

	submitHandler = data => {
		const names = this.state.contacts.map(contact => contact.name.toLowerCase())

		if (names.includes(data.name.toLowerCase())) {
			alert(`${data.name} is already in contscts.`);
			return;
		}

		this.setState(prevState => {
			return {
				contacts: [...prevState.contacts, { name: data.name, id: nanoid(), number: data.number }]
			}
		})
	}

	changeFilter = e => {
		this.setState({ filter: e.target.value })
	}

	deleteContact = (itemId) => {
		this.setState((prevState) => {
			return {
				contacts: prevState.contacts.filter(contact => contact.id !== itemId)
			}
		})
	}

	render() {
		// console.log(this.state);

		const normalizedFilter = this.state.filter.toLowerCase();
		const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
		return (<>
			<Container text="PhoneBook">
				<PhoneBook onSubmit={this.submitHandler} />
			</Container>

			{this.state.contacts.length > 0 &&
				(<Container text="Contact list">
					<Filter onChange={this.changeFilter} />
					<ContactsList state={filteredContacts} deleteContact={this.deleteContact} />
				</Container>)
			}
		</>
		)
	}
};
