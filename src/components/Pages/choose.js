import react from 'react';
import Footer from "../Footer";
import CardList from './choosecard';
import './choose.css'
function choose(){
    return(
    <>    
        <div className="chln">
            <hr className="pot"></hr>
        </div>
        <h1 className="ch">Select ones you like</h1>
        <div className="chln">
            <hr className="pot"></hr>
        </div>
        <CardList />
        <div className="chln">
            <hr className="pot"></hr>
        </div>
        <div>
            <p className="info">
                *choose the ones you like so we can recommend you accordingly. Thankyou!!!
            </p>
        </div>
        <div className="chln">
            <hr className="pot"></hr>
        </div>
         <Footer /> 
    </>
    )
}
export default choose;