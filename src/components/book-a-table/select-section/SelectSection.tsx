import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import SelectTimeSlot from './SelectTimeSlot';
import SelectParty from './SelectParty';
import SelectDate from './SelectDate';

type SelectSectionProps = {
	activeTimeSlot: string;
	setActiveSlot: React.Dispatch<React.SetStateAction<string>>;
	selectedDate: string;
	setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};
const SelectSection: React.FC<SelectSectionProps> = ({
	activeTimeSlot,
	setActiveSlot,
	selectedDate,
	setSelectedDate,
}) => {
	return (
		<Flex
			flex={1}
			flexDir={{ base: 'column', md: 'row' }}
			justify={'space-between'}
			align={'center'}
			gap={8}
		>
			<SelectParty />
			<SelectDate
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<SelectTimeSlot />
			
		</Flex>
	);
};

export default SelectSection;
