import React, {useEffect} from 'react';
import Square from "./Square";
import styles from'./styles.module.css'
import classnames from "classnames";


const TableSquare = () => {

    useEffect(() => {
        const tableSquare = document.getElementById('tableSquare')
        const square = document.getElementById('square')

        const tableSquareWidth = tableSquare.offsetWidth
        const tableSquareArea = tableSquareWidth * tableSquareWidth
        console.log(tableSquareArea, tableSquareWidth)

        const squareWidth = 50*50
        let squareQuantity = tableSquareArea/squareWidth
        squareQuantity = Math.floor(squareQuantity)
        console.log(squareQuantity)
        for(let i = 0; i < squareQuantity; i +=1){
            tableSquare.innerHTML += `<div class=${styles.square}></div>`
        }

    }, [])

const classes = classnames(styles.tableSquare)

    return (
        <div id='tableSquare' className={classes}>

        </div>
    );
};

export default TableSquare;
