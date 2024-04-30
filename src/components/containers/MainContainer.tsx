import {
	DESKTOP_GLOBAL_PADDING_X,
	PADDING_Y,
	MOBILE_GLOBAL_PADDING_X,
} from '@/lib/constants';
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
		<Flex
			px={{ base: MOBILE_GLOBAL_PADDING_X, md: DESKTOP_GLOBAL_PADDING_X }}
			py={PADDING_Y}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default MainContainer;
