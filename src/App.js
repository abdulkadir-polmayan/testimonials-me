import React from 'react';
import "./App.css"
import Header from './Components/Header';
import Testi from './Components/Testi-text'
import Testimonial from './Components/Testimonial'

function App() {

  const [comment,setComment]=React.useState()


  //! this func trigger all element , 
  //? it have to be inside commponent
  function showComment(){
    if(comment==="sdfghj"){
      setComment("")
    }else{setComment("sdfghj")}
  }

  return (
    <div className="App">
     <Header />
     <Testi />
     <Testimonial
        name="his MOM"
        job="this is not god"
        showComment={showComment}
        comment={comment}
     />
     <Testimonial
        name="his MOM"
        job="this is not god"
        showComment={showComment}
        comment={comment}
     />
     <Testimonial
        name="his MOM"
        job="this is not god"
        showComment={showComment}
        comment={comment}
     />
   
    </div>
  );
}

export default App;
