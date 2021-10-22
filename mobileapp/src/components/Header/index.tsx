// React / ReactNative Stuffs
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

// MyComponents
import { UserPhoto } from '../UserPhoto';

// Styles
import { styles } from './styles';

// Images
import LogoSvg from "../../assets/logo.svg";
import { useAuth } from '../../hooks/auth';


export function Header() {
  const { user, signOut } = useAuth()
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        {
          user &&
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>
              Sair
            </Text>
          </TouchableOpacity>
        }

        <UserPhoto
          imageUri={user?.avatar_url}
        />
      </View>
    </View>
  );
}

/*
  Para trabalharmos com Svg precisamos instalar o react-native-svg

  expo install react-native-svg

  Depois disso vamos instalar o svg-transformer

  yarn add --dev react-native-svg-transformer

  Agora vamos configurar os svgs em nosso app:
    - Criar metro.config.js
    - Colocar dentro dele o snippet que está na documentação (Adicionar snippet no notion)
    - Depois disso precisamos sobrescrever as tipagens do svg
      - Para isso, criamos a pasta @types e dentro dela svg.d.ts
      - Dentro do arquivo colocamos:

        declare module "*.svg" {
          import React from 'react';
          import { SvgProps } from "react-native-svg"

          const content: React.FC<SvgProps>

          export default content
        }

    - Vamos precisar fazer a mesma coisa com png's
    - Então criamos dentro @types o arquivo png.d.ts e dentro dele colocamos:
        declare module "*.png"

*/

/*
  Para lidarmos com o espaço entre a statusbar e nosso conteúdo, vamos utilizar a biblioteca react-native-iphone-x-helper
    yarn add react-native-iphone-x-helper

  Essa biblioteca nos auxilia na hora de configurarmos nosso conteúdo para não ficar por baixo da statusbar e nem de notch's dos dispositivos modernos.

*/