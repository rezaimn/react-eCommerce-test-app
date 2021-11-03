import React, {PropsWithChildren} from 'react';

interface CounterButtonProps {
    color: string;
    handleClick:()=> void;
}

const CounterButton:React.FC<PropsWithChildren<CounterButtonProps>> = ({handleClick,children,color}) => {
    return (
        <span onClick={handleClick} style={
            {
                backgroundColor: color,
                cursor: 'pointer',
                color: 'white',
                margin: '20px',
                padding: '10px',
            }}>
            {children}
        </span>
    )
}


export default CounterButton;
