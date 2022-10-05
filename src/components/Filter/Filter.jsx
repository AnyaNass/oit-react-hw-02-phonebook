
export const Filter = ({ value, onChange }) => {
	return (
		<label>
			<span>Search contact</span>
			<input type="text" value={value} onChange={onChange} />
		</label>
	)
}