export function Input(props) {
   return (
    <input id="name" type="text" value={props.value} onChange={props.onChange}/>
   )
 }