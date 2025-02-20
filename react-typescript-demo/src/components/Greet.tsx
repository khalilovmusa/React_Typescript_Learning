type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return(
        <div>
            { props.isLoggedIn ? <h2>Welcome {props.name} you have {messageCount} unread messages!</h2> : `Welcome Guest please log in to see your unread messages`}
            
        </div>
    )
}