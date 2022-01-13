import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { Store } from '../../../store';
import HelloContent from '../../helloContent/HelloContent';

export default function HelloWorld(props:IHelloWorldProps){
    
    


    return (
      <>
        <Provider store={Store}>
          
          <HelloContent/>
        </Provider>
      </>
    );
}
