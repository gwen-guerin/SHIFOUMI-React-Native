import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header() {
  return (
    <Appbar.Header style={{ backGroundColor: '#acaeb0' }}>
      <Appbar.Content
        title="Rock Paper Scissor"
        style={{
          alignItems: 'center',
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
      />
    </Appbar.Header>
  );
}
