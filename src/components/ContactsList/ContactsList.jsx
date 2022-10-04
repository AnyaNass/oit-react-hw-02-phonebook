
export const ContactsList = ({ state }) => {
	return (
		<ul>
			{state.map(item => {
				return <li key={item.id}>
					<span>{item.name}</span>
					<span>{item.number}</span>
				</li>
			})}
		</ul>
	)
}