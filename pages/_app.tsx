import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import PlayerLayout from '../components/playerLayout';
import "reset-css";



const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f5%',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDDBDB',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
  },
  Component: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadown: 'none'
          },
        },

      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
      <Component {...pageProps} />;
      </PlayerLayout>
    </ChakraProvider>

  );
};

export default MyApp


