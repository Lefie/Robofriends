import React from 'react';
import Card from './Card';

const CardList = ({robot}) =>{
    
    return (
    <div>
        {
            robot.map((user,index) => {
                return (
                    
                <Card 
                key={index} 
                id ={robot[index].id} 
                name = {robot[index].name} 
                email={robot[index].email} 
                />
                );
            })
    
        }    
    </div>
    );
}

export default CardList;