type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...';

    } else if (props.status === 'success') {
        message = 'Data fetched succesfully!'
    } else if ( props.status === 'error') {
        message = 'Error while fetching data'
    }
    return (
        <div>
            <h2 style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                position: "absolute",
                right: 0,
                bottom: "2rem",
                padding: "0.5rem",
                fontFamily: "sans-serif",
                fontSize: "1.5rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }} >Status : {message}</h2>
        </div>
    )
}