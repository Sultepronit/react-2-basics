import React from 'react';

const Contents = () => {
    function returnRandomInt() {
        return Math.floor(Math.random() * 1000);
    }

    function handleClick() {
        console.log('Clicked!');
    }

    function handleClick2(parameter) {
        console.log(`${parameter} inserted!`);
    }

    function handleClick3(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    }

    return (
    <main>
        <p>1 + 2</p>
        <p>{1 + 2}</p>
        <p>Here's your random number: {returnRandomInt()}</p>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={() => handleClick2('Hello!')}>Click me too!</button>
        <button onClick={(e) => handleClick3(e)}>And me!</button>
    </main>
    )
}

export default Contents;
