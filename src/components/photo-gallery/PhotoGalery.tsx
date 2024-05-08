import { Grid, GridItem, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../containers/MainContainer';
import SectionHeader from '../headings/SectionHeader';
import MainLink from '../homepage/links/MainLink';
import { NAVBAR_HEIGHT } from '@/lib/constants';

const PhotoGalery = () => {
	return (
		<Stack spacing={6}>
			<MainContainer
				flexDir={{ base: 'column', md: 'row' }}
				justify={{ base: 'flex-start', md: 'space-between' }}
				align={{ base: 'flex-start', md: 'center' }}
			>
				<SectionHeader>CAFEIANA MOMENTS</SectionHeader>
				<MainLink href={'/about-us#contact'}>FOLLOW US</MainLink>
			</MainContainer>
			<Grid
				templateAreas={{
					base: `'photo1 photo2 '
					'photo3 photo4 '
					'photo5 photo5 '	
					`,
					md: `
    'photo1 photo1 photo2 photo3 photo4'
    'photo1 photo1 photo2 photo3 photo4'
    'photo1 photo1 photo5 photo5 photo5'
		'photo1 photo1 photo5 photo5 photo5'
		'photo1 photo1 photo5 photo5 photo5'

  `,
				}}
				overflowX={'auto'}
				maxW='100vw'
				// maxH={`calc(100vh - ${NAVBAR_HEIGHT})`}
				gap={{ base: 1, md: 4 }}
				py={{ base: 1, md: 4 }}
			>
				<GridItem gridArea='photo1'>
					<Image
						src='/assets/coffee.jpg'
						alt='photo1'
						objectFit='cover'
						width='100%'
						height='100%'
					/>
				</GridItem>
				<GridItem gridArea='photo2'>
					<Image
						src='/assets/photo2.jpg'
						alt='photo2'
						objectFit='cover'
						width='100%'
						height='100%'
					/>
				</GridItem>
				<GridItem gridArea='photo3'>
					<Image
						src='/assets/photo3.jpg'
						alt='photo3'
						objectFit='cover'
						width='100%'
						height='100%'
					/>
				</GridItem>
				<GridItem gridArea='photo4'>
					<Image
						src='/assets/photo4.jpg'
						alt='photo4'
						objectFit='cover'
						width='100%'
						height='100%'
					/>
				</GridItem>
				<GridItem gridArea='photo5'>
					<Image
						src='/assets/photo5.jpg'
						alt='photo5'
						objectFit='cover'
						width='100%'
						height='100%'
					/>
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default PhotoGalery;
