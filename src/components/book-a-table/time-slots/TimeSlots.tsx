import { Grid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { timeData } from '../timeData';
import EachTimeSlot from './EachTimeSlot';

type TimeSlotsProps = {
	activeTimeSlot: string;
	setActiveTimeSlot: React.Dispatch<React.SetStateAction<string>>;
};
const TimeSlots: React.FC<TimeSlotsProps> = ({
	activeTimeSlot,
	setActiveTimeSlot,
}) => {
	return (
		<Stack w='full' spacing={3}>
			<Text fontSize={'.875rem'} color={'#666'}>
				Choose an available time slot:
			</Text>
			<Grid
				templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }}
				gap={2}
			>
				{timeData.map((time: string, idx: number) => (
					<EachTimeSlot
						key={idx}
						isActive={time === activeTimeSlot}
						onClick={() => setActiveTimeSlot(time)}
					>
						{time}
					</EachTimeSlot>
				))}
			</Grid>
		</Stack>
	);
};

export default TimeSlots;
