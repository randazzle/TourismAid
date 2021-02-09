import React from 'react'
import './CardLists.css'
import CardImages from "./CardImages"
import i1 from "./bhaktapur.jpg"
import i2 from "./pokhara.jpg"
import i3 from "./chitwan.jpg"
import i4 from "./gosaikunda.jpg"
function BookmarksCardList() {
    let Arr= [<CardImages src={i1} txt="Bhaktapur Durbar Square"  > </CardImages> ,
                        <CardImages src={i2}  txt="Pokhara" ></CardImages>,
                       <CardImages src={i3}  txt="Chitwan NP" ></CardImages>,
                       <CardImages src={i4}  txt="Gosaikunda" ></CardImages>];
    return (
        <>
        <div className="pattern">
            {
                Arr.map((item,index)=>{
                        return(
                            <div key={index} className="card" > 
                                {item} 
                                <ul className="buttocomponent">
                                    <li>
                                        <button className="butto">See More </button>
                                    </li>
                                    <li>
                                    <button className="butto">Bookmark</button>
                                    </li>
                                </ul>

                            </div>                         
                        )
                    })
            }        
        </div>
        
        </>
    )
}

export default BookmarksCardList
