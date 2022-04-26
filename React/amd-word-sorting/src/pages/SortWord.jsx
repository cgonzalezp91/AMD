import { useState, useEffect } from "react";
import './sortWord.css'
const SortWord = () => {
    const [wordsState, setwordsState] = useState([])
    const [tableState, setTableState] = useState([])
   

    useEffect(() => {
        tableRows(wordsState);
    }, [wordsState])
    const arrangeWords = () => {
        let words = document.getElementById('inputWords')
        if (!words.value) return alert('No words to arrange')
        const wordArray = words.value.split(' ').sort()
        console.log(wordArray)
        let wordsTwoD = arrangeTwoD(wordArray)
        setwordsState(wordsTwoD)
        
    }
    const arrangeTwoD = (array) =>{
        const resultArray = []
        const mySet = new Set()
        let loopCount = Math.floor(array.length / 4)
        loopCount += (array.length % 4 ? 1 : 0)
        for (let i = 0; i < loopCount; i++){
            let tempArray = []
            let tempCount = loopCount
            let j = i
            let maxCount = 4
            while (j < array.length && maxCount > 0){
                if (!mySet.has(array[j])) {
                    mySet.add(array[j])
                    tempArray.push(array[j])
                }
                j+=tempCount
                if (tempCount > 2 || (tempCount >= Math.abs(array.length - j) && maxCount > 0) ){
                    tempCount -= 1
                }
                if (j >= array.length) j=array.length-1
                maxCount-=1
            }
            if (tempArray.length < 4){
                for (let k = tempArray.length; k < 4; k++){
                    tempArray.push('')
                }
            }
            resultArray.push([...tempArray])
        }
        return resultArray
    }
    const tableRows = (wordsState) =>{
        if(wordsState && wordsState.length > 0){
        const max = wordsState.length
        setTableState(
            Array.from({length: max}, function(item, index){
            return <tr key={index}>
              {
                wordsState[index].map((x, idx) => {
                    return <td className="p-6"  key={idx}><span className={x ? 'p-5 has-background-grey has-text-link-light' : ''}>{x}</span></td>
                    }
                )
              }
            </tr>
          })
        )}
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13){
            arrangeWords()
        }
    }
    const resetWords = () => {
        setTableState([])
        setwordsState([])
        document.getElementById('inputWords').value = ''
    }
    return (
        <div className="container has-text-centered">
            <section className="container m-4">
                <input id="inputWords" className="input" type="text" placeholder="Words to sort" onKeyDown={handleKeyDown} />
            </section>
            <section className="container m-4 is-flex is-justify-content-center">
                <button onClick={arrangeWords} className="button mr-1">Arrange</button>
                <button onClick={resetWords} className="button ml-1">Reset</button>
            </section>
            <section className="section">
                <table className="table is-bordered is-fullwidth">
                    <tbody>
                        {tableState}
                   </tbody>
                </table>
            </section>
        </div>
    );
};

export default SortWord;