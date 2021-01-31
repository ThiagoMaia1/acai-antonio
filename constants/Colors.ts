// https://coolors.co/9040a0-702f7b-f8f6f2-928c6f

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const roxoForte = '#702f7b';
const roxoFraco = '#9040A0';
const offWhite = '#fcfcf9';
const cinza = '#c9c9c9';

export default {
  light: {
    text: '#000',
    background: offWhite,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    botaoDefault: roxoFraco,
    botaoSelected: roxoForte,
    bordas: cinza,
    cinzaSobre: '#d9d9d9',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    botaoDefault: roxoFraco,
    botaoSelected: roxoForte
  },
};
