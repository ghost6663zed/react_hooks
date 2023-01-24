import React, {useState, useEffect} from "react";

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    // useEffect(() => {
    //     console.log('render')
    // } )


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type')
        }


    }, [type])

    useEffect(() => {
        console.log('componentdidmount')

        window.addEventListener('mousemove', event => {
            setPos({
                x: event.clientX,
                y: event.clientY

            })
        })
    }, [])
    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('users')} className="btn btn-danger">Пользователи</button>
            <button onClick={() => setType('todos')} className="btn btn-success">todos</button>
            <button onClick={() => setType('posts')} className="btn btn-default">посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </div>
    )
}


export default App;

