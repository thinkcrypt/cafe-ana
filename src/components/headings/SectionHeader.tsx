import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type SectionHeaderProps = TextProps & {
	children: React.ReactNode;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({
	children,
	...props
}) => {
	return (
		<Text fontSize='4rem' fontWeight={400} letterSpacing={'1px'} {...props}>
			{children}
		</Text>
	);
};

export default SectionHeader;
