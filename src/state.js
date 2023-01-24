import React, {useState} from 'react';

function computeInitialCounter() {
    console.log('some calculations...')
    return Math.trunc(Math.random() * 20)
}

function App() {
    // const [counter, setCounter] = useState(0)
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'счетчик',
        date: Date.now()
    })

    function increment() {
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1

        })
        setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'новое название'
            }
        })
    }


    return (
        <div>
            <h1>счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">добавить</button>
            <button onClick={decrement} className="btn btn-danger">убрать</button>
            <button onClick={updateTitle} className="btn btn-default">изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
