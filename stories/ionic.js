import React from 'react';
import { storiesOf } from '@storybook/react';
import { IonApp } from '@ionic/react';

storiesOf('IonApp', module)
  .add('', () => {
    return <IonApp>Hello</IonApp>
  });
