import React, {useState} from "react";



function App() {
    const [type, setType] = useState('users')

    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('users')} className="btn btn-default">Пользователи</button>
            <button onClick={() => setType('todo')} className="btn btn-default">todo</button>
            <button onClick={() => setType('posts')} className="btn btn-default">посты</button>

        </div>
    )
}


export default App;
