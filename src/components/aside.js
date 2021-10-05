import * as React from 'react';
import {LightTheme, BaseProvider, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

const Aside = () => {
    const [css, theme] = useStyletron();
    return (
        <Block
            width={['0px', '0px', '200px', '200px']}
            display={['none', 'none', 'flex', 'flex']}
            justifyContent="center">
            <h1>Wynston</h1>
        </Block>
    )
}

export default Aside