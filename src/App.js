import React from 'react';
import './App.css';
import Button from "./components/Button";
import Field from "./components/Field";
import Picker from "./components/Picker";
import Head from "./components/Head";
import TableScuare from "./components/TableScuare";




function App() {
    const pickerData = ['Pick game mode', 2 ,3]

  return (
    <div className="App">
     <div className="row">
         <div className="leftSide">
             <div className="row">
                 <Picker
                     pickerData = {pickerData}
                     size=''
                     name='game mode'
                 />
                 <Field
                     rounded
                     type='text'
                     styles = 'default'
                     name='name field'
                     value='Enter your name'
                 />
                 <Button
                     uppercase>
                     play
                 </Button>
             </div>

             <Head
                 size='2rem'
             h='h3'
                 align='center'
                 padding='2rem'
             >
                 Message here
             </Head>
             <TableScuare />
         </div>
         <div className="rightSide">

         </div>
     </div>
    </div>
  );
}

export default App;
