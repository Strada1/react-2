function Welcome(props) {
    return (
        <div>
            <h1 className={props.className}>Привет, {props.name} </h1>
            <button className={props.but}>123</button>
        </div>
    );
}

export default Welcome;
