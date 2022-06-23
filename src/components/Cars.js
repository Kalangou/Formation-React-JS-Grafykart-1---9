import React from "react";

const Car = ({name, color, year}) => {
    const colorInfo = color ? color : 'Néant';

    if(name) {
        return (
            <div style={ {backgroundColor: 'pink', width:'400px', padding: '10px', margin:'5px auto'} }>
                <p>Marque: { name }</p>
                <p>Année: { year }</p>
                <p>Couleur: { colorInfo }</p>
            </div>
        )
    } else {
        return null; 
    }

}

export default Car;