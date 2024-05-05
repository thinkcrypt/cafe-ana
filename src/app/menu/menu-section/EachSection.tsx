import { Flex, Menu, Stack } from '@chakra-ui/react';
import React from 'react';
import MenuSectionHeader from './MenuSectionHeader';
import MenuSectionSubTitle from './MenuSectionSubTitle';
import EachItem from './EachItem';

type EachSectionProps = {
	section: any;
};
const EachSection: React.FC<EachSectionProps> = ({ section }) => {
	return (
		<Stack w='full'>
			<Stack w='full' spacing={0}>
				<MenuSectionHeader>{section?.title}</MenuSectionHeader>
				<MenuSectionSubTitle>{section?.subTitle}</MenuSectionSubTitle>
			</Stack>
			{section?.items.map((item: any, idx: number) => {
				return <EachItem key={idx} item={item} />;
			})}
		</Stack>
	);
};

export default EachSection;
