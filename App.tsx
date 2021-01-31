import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Provider } from './store/store';
import { initial } from './store/Classes/State';
import { Item } from './store/Classes/Item';

export type Component = React.ComponentClass<any, any> | React.FunctionComponent<any>

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [nItemAtual, setItemAtual] = useState(initial.nItemAtual);
  let [usuario, setUsuario] = useState(initial.usuario);
  let [itens, setItens] = useState(initial.itens);
  console.log(itens);

  const getValorTotal = () => {
    return itens.reduce((res, i) => {
        res += i.getValor();
        return res;
    }, 0)
  }

  const getDadosItemAtual = () : Item => itens[nItemAtual];

  const editItem = (atributo : keyof Item, valor : any) => {
    let item = getDadosItemAtual();
    item[atributo] = valor;
    setItens(itens.splice(nItemAtual, 1, item))
  }
  
  const metodos = {
    getValorTotal,
    getDadosItemAtual,
    editItem,
    setTamanho: (valor : number) => editItem('nTamanho', valor),
    addItem: () => setItens([...itens, new Item()]),
    toggleRecheio: (valor : number) => {
      let { recheios } = getDadosItemAtual();
      if(recheios.includes(valor))
        recheios = recheios.filter(r => r !== valor);
      else 
        recheios = [...recheios, valor];
      editItem('recheios', recheios)  
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider value={{nItemAtual, itens, usuario, ...metodos}}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar/>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
