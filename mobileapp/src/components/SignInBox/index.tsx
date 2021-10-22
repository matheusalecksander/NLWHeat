import React from 'react';
import {
  View
} from 'react-native';

// MyComponents
import { MyButton } from '../Button';
import { useAuth } from '../../hooks/auth';

// Styles
import { COLORS } from '../../theme';
import { styles } from './styles';
import { sin } from 'react-native-reanimated';

export function SignInBox() {
  const { signIn } = useAuth()
  return (
    <View style={styles.container}>
      <MyButton
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={false}
        onPress={signIn}
      />
    </View>
  );
}