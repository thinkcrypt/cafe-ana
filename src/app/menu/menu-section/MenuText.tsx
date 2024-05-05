import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';
type MenuTextProps = TextProps & {
	children: React.ReactNode;
};
const MenuText: React.FC<MenuTextProps> = ({ children, ...props }) => {
	return (
		<Text fontSize={'1rem'} fontWeight={300} color={'black'} {...props}>
			{children}
		</Text>
	);
};

export default MenuText;
