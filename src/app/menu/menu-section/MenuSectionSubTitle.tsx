import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type MenuSectinSubTitleProps = TextProps & {};
const MenuSectionSubTitle: React.FC<MenuSectinSubTitleProps> = ({
	children,
	...props
}) => {
	return (
		<Text fontSize={'1rem'} fontWeight={300} color={'black'} {...props}>
			{children}
		</Text>
	);
};

export default MenuSectionSubTitle;
