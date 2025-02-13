type ButtonProps = {
    // handleClick: () => void //!=> If we doesnt return anything and it doesnt have to accept parameters
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void //!=> If we have to accept an event 
}

export const Button = (props: ButtonProps) => {
    return(
        <button onClick={event => props.handleClick(event, 1)} >Click me!</button>
    )
}