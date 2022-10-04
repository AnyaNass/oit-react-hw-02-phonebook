import React from 'react';
import { nanoid } from 'nanoid'

import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'

export class App extends React.Component {
	state = {
		contacts: [],
	}

	submitHandler = data => {
		// console.log(data);
		this.setState(prevState => ({ contacts: [...prevState.contacts, { name: data.name, id: nanoid(), number: data.number }] }))
	}

	render() {
		// console.log(this.state);
		return (<>
			<Container text="PhoneBook">
				<PhoneBook onSubmit={this.submitHandler} />
			</Container>
			{this.state.contacts === []
				?
				null
				:
				<Container text="Contact list">
					<ContactsList state={this.state.contacts} />
				</Container>}
		</>
		)
	}
};
