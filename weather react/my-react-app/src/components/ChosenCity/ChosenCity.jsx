

function ChosenCity({Json, handleSubmit}){

    function useCurrentCity(){
        window.addEventListener('load',  handleSubmit)
      }
      
    return(
        <div className="chosenCity">
                    {useCurrentCity()}
            <p>{  Json && <span>{`${Json.name}` }</span> }</p>
             
        </div>
    )
}

export default ChosenCity