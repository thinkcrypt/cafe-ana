import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react';
type EachTimeSlotProps = FlexProps & {
	children: React.ReactNode;
	isActive?: boolean;
};
const EachTimeSlot: React.FC<EachTimeSlotProps> = ({
	children,
	isActive,
	...props
}) => {
	return (
		<Flex
			w='full'
			h='60px'
			border={'1px solid black'}
			bgColor={isActive ? 'aboutSection' : 'transparent'}
			color={isActive ? 'white' : 'black'}
			justify={'center'}
			align={'center'}
			px={{ base: 4, md: 12 }}
			{...props}
		>
			<Text
				fontSize={'1rem'}
				fontWeight={isActive ? 600 : 400}
				cursor={'pointer'}
			>
				{children}
			</Text>
		</Flex>
	);
};

export default EachTimeSlot;
