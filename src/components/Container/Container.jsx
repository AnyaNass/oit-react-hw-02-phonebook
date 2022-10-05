import PropTypes from 'prop-types';
import { ContainerCommon, MainTitle, MainIcon } from './Container.styled'

export const Container = ({ text, children }) => {
	return <ContainerCommon>
		<MainTitle><MainIcon></MainIcon>{text}</MainTitle>
		{children}
	</ContainerCommon>
}

Container.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node.isRequired,
}
