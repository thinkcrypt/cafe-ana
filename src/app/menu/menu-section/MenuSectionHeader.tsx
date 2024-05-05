import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type MenuSectinHeaderProps = TextProps & {};
const MenuSectionHeader: React.FC<MenuSectinHeaderProps> = ({
	children,
	...props
}) => {
	return (
		<Text fontSize={'1.5rem'} fontWeight={600} color={'black'} {...props}>
			{children}
		</Text>
	);
};

export default MenuSectionHeader;
