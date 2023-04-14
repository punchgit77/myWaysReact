import React, { useEffect, useState } from 'react'
let main =[];


const getLocalStorage = () =>{
    let d = localStorage.getItem("data");
    if(d){
     return JSON.parse(localStorage.getItem("data"));
    }
    else{
     return [];
    }
 }
const FoodForm = () => {

const [foodname,setFoodName] = useState("");
const [maxTime,setMaxTime] = useState();
const [type,setType] = useState("");
const [data,setData] = useState(getLocalStorage());

const FoodName=(e)=>{
    e.preventDefault();
    setFoodName(e.target.value);
}
const DeliveryTime=(e)=>{
    e.preventDefault();
    setMaxTime(e.target.value)
}

// useEffect=(()=>{

// },[foodname]);
const optionField=(e)=>{
    e.preventDefault();
       setType(e.target.value);
       console.log(e.target.value);
}

const submitData=(e)=>{
    e.preventDefault();
    let x = foodname;
    let y = maxTime;
    let t = type;
      const d = { 
          foodname : x,
          type: t,
          time : y,
      }
     main = [...main,d];
    // console.log(food);
    localStorage.setItem('data',JSON.stringify(main))
    // localStorage.setItem('maxtime',JSON.stringify(time));
    // data =  [...food,time];
    // console.log(data);

}
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label style={{marginRight:'20px'}}>Food Name</label>
                    <input type="text" className="form-control" value={foodname} onChange={FoodName} />
                </div>
                <div className="form-group">
                    <label style={{marginRight:'20px'}}>Food Type</label>
                 
                <select class="custom-select" onChange={optionField}>
                    <option selected deselected>choose...</option>
                    <option>Pizzas</option>
                    <option>Burger</option>
                    <option>Ice Cream</option>
                    <option>Fried Potatoes</option>
                </select>
                </div>

                <div className="form-group">
                    <label style={{marginRight:'20px'}}>Max Delivery Time</label>
                    <input type="number" className="form-control" value={maxTime} onChange={DeliveryTime} />
                </div>
                <button style={{margin:'20px'}} type="submit" class="btn btn-primary btn-block" onClick={submitData}>Submit</button>
            </form>

          <div>------------------------------------------Rendered data----------------------------------------</div>
          <div className='outerbox'>

            {
                data.map((item)=>{
                    return <div className='box'>
                          <div className='innerbox'> {item.foodname} {item.type} {item.time}</div>
                          
                        </div>
                })
            }
                    </div>
        </div>
    )
}

export default FoodForm