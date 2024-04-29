import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type ParagraphProps = TextProps & {
	children: React.ReactNode;
};
const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
	return (
		<Text fontSize={'1rem'} fontWeight={300} {...props}>
			{children}
		</Text>
	);
};

export default Paragraph;
