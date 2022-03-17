import CompB from './CompB'
let CompA = ()=>{
    let name = "Akash"
    let sal = 40000
    let place = "bangalore"
    return <div>
        <h2>Function Component</h2>
        <h4> Name : {name}</h4>
        <h4> sal : {sal}</h4>
        <h4> Place : {place}</h4>
        <hr/>
        <CompB a={name} b={sal} c={place}/>
    </div>
}
export default CompA