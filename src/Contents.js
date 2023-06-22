import React from 'react';

const Contents = () => {
    function returnRandomInt() {
        return Math.floor(Math.random() * 1000);
    }

    return (
    <main>
        <p>1 + 2</p>
        <p>{1 + 2}</p>
        <p>Here's your random number: {returnRandomInt()}</p>
    </main>
    )
}

export default Contents;
