import React, { useState } from 'react';

const SmurfForm = props => {
    const newState = {name: '', age: '', height: ''}

    const [newSmurfs, setNewSmurfs] = useState(newState);

    const handleChanges = e => {
        setNewSmurfs({...newSmurfs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurfs)
        setNewSmurfs(newState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        name="name"
                        placeholder="NAME"
                        value={newSmurfs.name}
                        onChange={handleChanges}
                        />
                <input type="text"
                        name="age"
                        placeholder="AGE"
                        value={newSmurfs.age}
                        onChange={handleChanges}
                        />
                <input type="text"
                        name="height"
                        placeholder="HEIGHT"
                        value={newSmurfs.height}
                        onChange={handleChanges}
                        />
                <button type='submit'>add smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;