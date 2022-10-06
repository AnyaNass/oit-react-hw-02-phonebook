import React from 'react';
import { nanoid } from 'nanoid'

import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'
import { Filter } from './Filter/Filter'
import { DefaultPage } from './DefaultPage/DefaultPage'

export class App extends React.Component {
	state = {
		contacts: [],
		filter: '',
	}

	submitHandler = data => {
		const { contacts } = this.state;
		const { name, number } = data;

		const names = contacts.map(contact => contact.name.toLowerCase())

		if (names.includes(name.toLowerCase())) {
			alert(`${name} is already in contacts.`);
			return;
		}

		this.setState(prevState => {
			return {
				contacts: [...prevState.contacts, { name: name, id: nanoid(), number: number }]
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
		const { filter, contacts } = this.state;

		const normalizedFilter = filter.toLowerCase();
		const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

		return (<>
			<Container text="PhoneBook">
				<PhoneBook onSubmit={this.submitHandler} />
			</Container>
			<Container text="Contacts">
				{this.state.contacts.length > 0 ?
					(<> {filteredContacts.length > 0 ?
						(<>
							<Filter onChange={this.changeFilter} />
							<ContactsList state={filteredContacts} deleteContact={this.deleteContact} />
						</>)
						:
						(<>
							<Filter onChange={this.changeFilter} />
							<DefaultPage text="There is not such a contact" />
						</>)
					}
					</>)
					:
					<DefaultPage text="Add someone to your contacts" />
				}
			</Container>
		</>
		)
	}
};
