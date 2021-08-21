import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllActualités} from '../redux/Actualités/actionActualités'
import '../App.css'
const Actualités = () => {
      //get All Actualités
  const actualités = useSelector((state) => state.actualitéStore.actualité);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActualités());
  }, []);
  var n = 2;


  const [lala,setLala]=useState(n)
  function increment(){
   
    n++
  setLala(n)
       }
       

    return (
        <div>
           <div className="blog" id="blog">
            <div className="container">
                <div className="section-header text-center ">
                    <p>Nos</p>
                    <h2>Actualités</h2>
                </div>
                <div className="row">
                   
                        {actualités.slice(0, lala).map(el=>(
                             <div className="col-lg-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" alt="Blog" />
                            </div>
                            <div className="blog-text">
                                <h2>{el.title}</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                     <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                 </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div> </div>
                        </div>))}
                   
                   </div>
            </div>
            <div className="text-center">
            <button className="btn" onClick={()=>{increment}}  >Read More <i className="fa fa-angle-right"></i></button>
            </div>
        </div>  
        </div>
    )
}

export default Actualités
