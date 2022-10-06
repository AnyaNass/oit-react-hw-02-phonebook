import React from 'react';
import { FaUserAlt, FaPhoneAlt, FaUserPlus } from 'react-icons/fa';
import { Form, FormWrapper, FormField, FormLable, AddButton } from './PhoneBook.styled'
export class PhoneBook extends React.Component {
	state = {
		name: '',
		number: '',
	}

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
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
		const { name, number } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormWrapper>
					<FormField
						type="text"
						name="name"
						placeholder="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={name}
						onChange={this.handleInputChange}
					/>
					<FormLable><FaUserAlt /></FormLable>
				</FormWrapper>
				<FormWrapper>
					<FormField
						type="tel"
						name="number"
						placeholder="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						value={number}
						onChange={this.handleInputChange}
					/>
					<FormLable><FaPhoneAlt /></FormLable>
				</FormWrapper>
				<AddButton type="submit"><FaUserPlus /></AddButton>
			</Form >
		)
	}
};
