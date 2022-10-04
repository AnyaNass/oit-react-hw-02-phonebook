import React from 'react';

export class PhoneBook extends React.Component {
	state = {
		name: '',
		number: '',
		filter: '',
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
		console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<span>Name</span>
					<input
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						onChange={this.handleInputChange}
					/>
				</label>
				<label>
					<span>Phone</span>
					<input
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						onChange={this.handleInputChange}
					/>
				</label>
				<button type="submit">Add contact</button>
			</form >
		)
	}
};