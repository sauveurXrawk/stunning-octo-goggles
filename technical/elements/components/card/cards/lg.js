import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
//import './index.css'
import {$f,$try, states} from '../../../../core/utility';
import Card from '../'
import {Space,Label} from '../../../../'


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module LgCard
 * @param {object} props.size - This is to set the size of the card.
 * @param {object} props.control - This is where the control can be set.
 */
function element(props) {
    // const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    const [size, setSize] = useState("lg")
    const [title] = useState(props.title)
    const [preface] = useState(props.preface)


    useEffect(() => {
        setSize($f(props.size ? props.size : size));
    }, [size]);



    return (
        <>
              <Card delay={props.delay} onClick={() => props.onClick()} image={props.image}>
             
               <div className="relative flex h-full items-end">
            
               <Space spx="2" spy="2" customFlex={true} flex="wrap">
                 <Label type="card">{title}</Label>
                 <Label type="preface">{preface}</Label>
               </Space>
               </div>
             
          
             </Card>

        </>
    );
}




export default element;
