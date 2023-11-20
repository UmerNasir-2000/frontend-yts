import '@mantine/core/styles.css';

import {Button, MantineProvider} from '@mantine/core';

export default function App() {
    return (
        <MantineProvider>
            <Button>Welcome</Button>
        </MantineProvider>
    );
}