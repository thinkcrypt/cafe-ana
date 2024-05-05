'use client';
import MainContainer from '@/components/containers/MainContainer';
import SectionHeader from '@/components/headings/SectionHeader';
import PageLayout from '@/components/layouts/PageLayout';
import { Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { menuData } from './menuData';
import EachSection from './menu-section/EachSection';
import { NAVBAR_HEIGHT } from '@/lib/constants';

const MenuPage = () => {
	return (
		<PageLayout>
			<MainContainer flex={1} bgColor={'navBackground'}>
				<Flex
					flex={1}
					position={'relative'}
					display={{ base: 'none', md: 'flex' }}
				>
					<Image
						src={'/assets/menu.webp'}
						w='full'
						h={`100vh`}
						objectFit={'cover'}
						position='sticky'
						top={0}
						bottom={0}
					/>
				</Flex>
				<Stack flex={1} pl={{ base: 0, md: 16 }} pt={{ base: 0, md: 8 }}>
					<SectionHeader
						fontSize={'5rem'}
						letterSpacing={'1px'}
						color='black'
						fontWeight={400}
					>
						MENU
					</SectionHeader>
					<Stack w='full' spacing={10}>
						{menuData?.map((section: any, idx: number) => {
							return <EachSection key={idx} section={section} />;
						})}
					</Stack>
				</Stack>
			</MainContainer>
		</PageLayout>
	);
};

export default MenuPage;
