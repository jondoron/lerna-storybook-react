import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
    .add('default', () => <Button>{'Button'}</Button>)
    .add('red', () => <Button color='red'>{'Button'}</Button>)
    .add('purple', () => <Button color='purple'>{'Button'}</Button>)
;
