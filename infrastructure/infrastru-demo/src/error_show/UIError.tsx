// @ts-nocheck
import React from 'react';
const interfaceData = {
    id: 1,
    name: '123',
    price: 30,

}
const UIError = () => {
    // 方式一 try catch
    const data = console.log(JSON.parse(interfaceData));
   
    return (
        <div>
            <div>name: {data.name}</div>
            <div>price: {data.price}</div>
            <div>count: {data.count}</div>
        </div>
    )
}
export default UIError;