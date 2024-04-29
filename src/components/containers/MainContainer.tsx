import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

type MainContainerProps = FlexProps & {
	children: React.ReactNode;
};
const MainContainer: React.FC<MainContainerProps> = ({
	children,
	...props
}) => {
	return (
		<Flex px={20} py={4} {...props}>
			{children}
		</Flex>
	);
};

export default MainContainer;
