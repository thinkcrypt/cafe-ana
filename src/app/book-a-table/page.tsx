'use client';
import SelectSection from '@/components/book-a-table/select-section/SelectSection';
import TimeSlots from '@/components/book-a-table/time-slots/TimeSlots';
import MainContainer from '@/components/containers/MainContainer';
import SectionHeader from '@/components/headings/SectionHeader';
import PageLayout from '@/components/layouts/PageLayout';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '@/lib/constants';
import { Button, Flex, Stack } from '@chakra-ui/react';
import React from 'react';

const BookATable = () => {
	const [activeTimeSlot, setActiveTimeSlot] = React.useState<string>('');
	const [selectedDate, setSelectedDate] = React.useState<string>(
		new Date().toISOString()
	);
	return (
		<PageLayout>
			<MainContainer
				w='full'
				minH={{
					base: `calc(100vh - ${NAVBAR_HEIGHT_MOBILE})`,
					md: `calc(100vh - ${NAVBAR_HEIGHT})`,
				}}
				justify={{ base: 'flex-start', md: 'center' }}
				align={{ base: 'flex-start', md: 'center' }}
			>
				<Stack w='fit-content' spacing={6}>
					<SectionHeader fontSize={{ base: '2rem', md: '5rem' }}>
						BOOK A TABLE
					</SectionHeader>
					<SelectSection
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						activeTimeSlot={activeTimeSlot}
						setActiveSlot={setActiveTimeSlot}
					/>
					<TimeSlots
						activeTimeSlot={activeTimeSlot}
						setActiveTimeSlot={setActiveTimeSlot}
					/>
					<Button
						bgColor={'aboutSection'}
						w='fit-content'
						color={'white'}
						rounded={0}
						px={8}
						py={6}
					>
						Book A Table
					</Button>
				</Stack>
			</MainContainer>
		</PageLayout>
	);
};

export default BookATable;
