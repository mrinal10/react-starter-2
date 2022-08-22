import React from 'react'

function Columns() {
    const items = [{id: 1, title: 'name'}]
    return (
        <>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name:</td>
            <td>Mrinal</td>
        </>
    )
}

export default Columns