function Buttons (){

    function GoToNext(e){
        if(e.target.id === document.getElementById('1').id){
            document.getElementById('2').classList.remove('-active');
            document.getElementById('3').classList.remove('-active');
            document.getElementById('1').classList.toggle('-active')
        }
        if(e.target.id === document.getElementById('2').id){
            document.getElementById('2').classList.toggle('-active')
            document.getElementById('1').classList.remove('-active');
            document.getElementById('3').classList.remove('-active');
        }
        if(e.target.id === document.getElementById('3').id){
            document.getElementById('3').classList.toggle('-active')
            document.getElementById('2').classList.remove('-active');
            document.getElementById('1').classList.remove('-active');
        }
    }
    
    return(
        <div className="screens1">
            <button onClick={GoToNext} id="1" className="weather__button -active">Now</button>
            <button onClick={GoToNext} id="2" className="weather__button">Details</button>
            <button onClick={GoToNext} id="3"className="weather__button">Forecast</button>
        </div>
    )
}
export default Buttons