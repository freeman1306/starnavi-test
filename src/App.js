import React from 'react';
import './App.css';
import Button from "./components/Button";
import Field from "./components/Field";
import Picker from "./components/Picker";
import Head from "./components/Head";
import TableScuare from "./components/TableScuare";
import LeaderBoard from "./components/LeaderBoard";




function App() {
    const pickerData = ['Pick game mode', 2 ,3]

  return (
    <div className="App">
    <div className="container">
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
                        view = 'default'
                        name='name field'
                        placeholder='Enter your name'
                    />
                    <Button
                        uppercase>
                        play
                    </Button>
                </div>

                <Head
                    h='h3'
                >
                    Message here
                </Head>
                <TableScuare />
            </div>
            <hr/>
            <div className="rightSide">
                <Head
                    h='h3'
                    view={{
                        textAlign: 'left',
                        marginTop: '0',
                        paddingTop: '0'
                    }}
                >
                    Leader Board
                </Head>
                <LeaderBoard />
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
