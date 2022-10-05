
export const ContactsList = ({ state, deleteContact }) => {
	return (
		<ul>
			{state.map(item => {
				return <li key={item.id}>
					<span>{item.name}</span>
					<span>{item.number}</span>
					<button type="button" onClick={(e) => deleteContact(item.id)}>Delete</button>
				</li>
			})}
		</ul >
	)
}