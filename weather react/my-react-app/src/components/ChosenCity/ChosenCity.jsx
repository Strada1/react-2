function ChosenCity({Json}){

    return(
        <div className="chosenCity">
            <p>{  Json && <span>{`${Json.name}` }</span> }</p>
             {/* <span>{Json.name && <span>{`${Json.name}`}</span>}</span> */}
        </div>
    )
}

export default ChosenCity