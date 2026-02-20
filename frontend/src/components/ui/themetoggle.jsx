import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function ThemeToggle({ toggleColorScheme, colorScheme }) {
    return (

        <ActionIcon 
        onClick={toggleColorScheme} 
        title="Toggle theme">

            {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>

    );
}
