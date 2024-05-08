import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Image,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef(null);

	return (
		<>
			<Box w='48px' h='48px' cursor={'pointer'}>
				<Image
					ref={btnRef}
					onClick={onOpen}
					src={'/icons/menu.svg'}
					alt='hamburger icon'
					w='48px'
					h='48px'
				/>
			</Box>

			<Drawer
				isOpen={isOpen}
				placement='top'
				onClose={onClose}
				// finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent w='100vw' h='100vh'>
					<DrawerCloseButton />

					<DrawerBody>
						<SidebarNavigation />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Sidebar;
