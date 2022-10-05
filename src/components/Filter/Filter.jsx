import PropTypes from 'prop-types';
import { FilterWrapper, FilterField, Label, FilterInput } from './Filter.styled'

export const Filter = ({ onChange }) => {
	return (
		<FilterWrapper>
			<FilterField>
				<Label>Search</Label>
				<FilterInput type="text" onChange={onChange} />
			</FilterField>
		</FilterWrapper>
	)
}

Filter.propTypes = {
	onChange: PropTypes.func.isRequired,
}
