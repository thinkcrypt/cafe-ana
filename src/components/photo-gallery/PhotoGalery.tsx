import { Grid, GridItem, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../containers/MainContainer';
import SectionHeader from '../headings/SectionHeader';
import MainLink from '../homepage/links/MainLink';
import { NAVBAR_HEIGHT } from '@/lib/constants';

const PhotoGalery = () => {
	return (
		<Stack>
			<MainContainer justify={'space-between'} align={'center'}>
				<SectionHeader>CAFEIANA MOMENTS</SectionHeader>
				<MainLink href={'/about-us#contact'}>FOLLOW US</MainLink>
			</MainContainer>
			<Grid
				templateAreas={`
        photo1 photo2 photo3 photo4
        photo1 photo2 photo3 photo4
        photo1 photo5 photo5 photo5
      `}
				maxW='100vw'
				// maxH={`calc(100vh - ${NAVBAR_HEIGHT})`}
				gap={6}
			>
				<GridItem area={'photo1'}>
					<Image
						src={'/assets/coffee.jpg'}
						alt={'photo1'}
						objectFit={'cover'}
					/>
				</GridItem>
				<GridItem area={'photo2'} >
					<Image
						src={'/assets/photo2.jpg'}
						alt={'photo2'}
						objectFit={'cover'}
					/>
				</GridItem>
				<GridItem area={'photo3'} >
					<Image
						src={'/assets/photo3.jpg'}
						alt={'photo3'}
						objectFit={'cover'}
					/>
				</GridItem>
				<GridItem area={'photo4'} >
					<Image
						src={'/assets/photo4.jpg'}
						alt={'photo4'}
						objectFit={'cover'}
					/>
				</GridItem>
				<GridItem area={'photo5'} >
					<Image
						src={'/assets/photo5.jpg'}
						alt={'photo5'}
						objectFit={'cover'}
					/>
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default PhotoGalery;
