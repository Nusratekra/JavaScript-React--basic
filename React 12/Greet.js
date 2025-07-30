import React from 'react';

//use arrowafunction
/* function Greet(){
    return <h1>"Beauty meant that you were good.<br></br> And being good meant being happy. <br></br> Happiness can be defined all kinds of ways, <br></br> but human beings, consciously or unconsciously,<br></br>  are always pulling for their own version of happiness. <br></br> Even people who want to die see death as a kind of solace, <br></br> and view ending their lives as the only way to make it there. <br></br> Happiness is the base unit of consciousness,<br></br>  our single greatest motivator."
<br></br> -Mieko Kawakami(Breast & Eggs)</h1>
} */
/*const Greet = () =><h3>"Beauty meant that you were good.
    <br></br> And being good meant being happy. 
    <br></br> Happiness can be defined all kinds of ways, 
    <br></br> but human beings, consciously or unconsciously,
    <br></br>  are always pulling for their own version of happiness.
     <br></br> Even people who want to die see death as a kind of solace, 
     <br></br> and view ending their lives as the only way to make it there. 
     <br></br> Happiness is the base unit of consciousness,<br></br>  our single greatest motivator."
<br></br> -Mieko Kawakami(Breast & Eggs)</h3>*/
const Greet = (props) => {
    const {name,heroName} = this.props
    //const {state1,state2} = this.state
    return (
        <div>
            <h1>Hello {name} aka {heroName}</h1>
        </div>
    )
}

export default Greet;