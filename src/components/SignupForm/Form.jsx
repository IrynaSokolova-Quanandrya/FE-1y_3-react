import { useState, useEffect } from "react"

export const Form = () => {
   
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(name);
         console.log('Виклик useeffect');
         return () => {
             
         }
    }, [name])
    
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
                <input type="text" name="name" value={name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Password
                <input type="password" name="password" value={password} onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}