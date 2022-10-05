import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Form, FormWrapper, FormField, FormLable, AddButton } from './PhoneBook.styled'
export class PhoneBook extends React.Component {
	state = {
		name: '',
		number: '',
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.reset();
	}

	reset = () => {
		this.setState({ name: '', number: '' })
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormWrapper>
					<FormField
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={this.state.name}
						onChange={this.handleInputChange}
					/>
					<FormLable>Name</FormLable>
				</FormWrapper>
				<FormWrapper>
					<FormField
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						value={this.state.number}
						onChange={this.handleInputChange}
					/>
					<FormLable>Phone</FormLable>
				</FormWrapper>
				<AddButton type="submit"><FaUserPlus /></AddButton>
			</Form >
		)
	}
};
