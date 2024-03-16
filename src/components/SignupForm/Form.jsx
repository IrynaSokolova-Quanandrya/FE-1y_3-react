import { useState, useEffect } from "react"

// true || 1 //1
// 0 || 1 //1
// undefined || 1 // 1

// 0 ?? 1//0
// undefined ?? 1//1
// null ?? 1//1
// '' ?? 1

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(window.localStorage.getItem(key) ?? initialValue)

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export const Form = () => {   
    const [name, setName] = useLocalStorage('name', '');    
    const [password, setPassword] = useLocalStorage('password', '');

    const handleChange = (e) => {
        const name = e.currentTarget.name
        switch (name) {
            case 'name':
                setName(e.currentTarget.value)
                return;
            case 'password':
                setPassword(e.currentTarget.value)
                return;
        
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        e.currentTarget.reset()        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name" value={name} onChange={handleChange} autoComplete="off"/>
            </label>
            <br />
            <label>
                Password
                <input type="password" name="password" value={password} onChange={handleChange} autoComplete="off"/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}