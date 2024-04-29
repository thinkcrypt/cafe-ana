import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type MainLinkProps = TextProps & {
	children: string;
	href: string;
};
const MainLink: React.FC<MainLinkProps> = ({ children, href, ...props }) => {
	return (
		<Link href={href}>
			<Text
				fontSize={'1.5rem'}
				borderBottom={'2px solid black'}
				w={'fit-content'}
				{...props}
			>
				{children}
			</Text>
		</Link>
	);
};

export default MainLink;
