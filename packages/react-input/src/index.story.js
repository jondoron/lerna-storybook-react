import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from '.';

storiesOf('Input', module)
    .add('world', () => <Input placeholder="Hello World!" />)
    .add('buddy', () => <Input placeholder="Hello Buddy!" />)
    .add('friend', () => <Input placeholder="Hello Friend!" />)
    .add('dude', () => <Input placeholder="Hello Dude!" />)
;
