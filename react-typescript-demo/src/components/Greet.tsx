type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return(
        <div>
            { props.isLoggedIn ? <h2>Welcome {props.name} you have {props.messageCount} unread messages!</h2> : `Welcome Guest please log in to see your unread messages`}
            
        </div>
    )
}