import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
export default function selectLanguage() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                Select Language
            </MenuButton>
            <MenuList>
                <MenuItem minH="48px">
                    <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                    />
                    <span>Fluffybuns the Destroyer</span>
                </MenuItem>
                <MenuItem minH="40px">
                    <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                        mr="12px"
                    />
                    <span>Simon the pensive</span>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
