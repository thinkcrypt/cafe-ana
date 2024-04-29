import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import { Flex } from '@chakra-ui/react';
import { NAVBAR_HEIGHT } from '@/lib/constants';

type PageLayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Flex w='full' h={NAVBAR_HEIGHT}></Flex>
			{children && children}
		</>
	);
};

export default PageLayout;
