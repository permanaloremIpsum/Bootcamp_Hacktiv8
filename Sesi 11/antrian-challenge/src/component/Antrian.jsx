import React, { useEffect, useState } from 'react';

function Antrian() {
    const [antrian, setAntrian] = useState([]);

    useEffect(()=>{
        displayAntrian()
        checkLengthAntrian()
    })

    // Fungsi cek panjang antrian
    let checkLengthAntrian = () => {
        let btnRemove = document.getElementById('button-remove')
        if(antrian.length === 0){
            btnRemove.disabled = true
        }else{
            btnRemove.disabled = false
        }
    }

    // Fungsi menambahkan antrian
    let antrianAdd = (e) => {
        e.preventDefault()
        let inputAntrian = document.getElementById('antrian')
        let tempArray = antrian

        // cek input value kosong atau tidak
        if(inputAntrian.value !== ''){
            // cek input value terdapat pada array antrian atau tidak
            if(!antrian.includes(inputAntrian.value)){
                tempArray.unshift(inputAntrian.value)
                setAntrian(tempArray)
            }else{
                alert("Nama sudah masuk dalam antrian!!")
            }
        }else{
            alert("Nama harus diisi!!")
        }
        displayAntrian()
        checkLengthAntrian()
        inputAntrian.focus()
        inputAntrian.value = ''
    }

    // Fungsi memproses antrian
    let antrianRemove = (e) => {
        e.preventDefault()

        let tempArray = antrian
        tempArray.pop()

        setAntrian(tempArray)
        displayAntrian()
        checkLengthAntrian()
    }

    // Fungsi menampilkan antrian
    let displayAntrian = () => {
        let display = document.getElementById('display')
        if(antrian.length <= 0){
            display.innerHTML = `<p>[ Antrian Kosong !]</p>`
        }else{
            let textArray = ''
            // perulangan array
            antrian.map((antri) => {
                textArray += `<span class="text-antrian">${antri}</span> <span class="anchor">=></span>`
                return display.innerHTML = textArray
            })

            // menghilangkan element anchor pada nilai array terakhir
            let el = document.querySelectorAll('.anchor')
            el[el.length - 1].remove()
        }
    }

    return (
      <div className="container">
            <form method="post">
                <label>Masukkan Nama</label><br/>
                <input type="text" name="antrian" id="antrian" /><br/><br/>
                <button id="button-add" type="button" onClick={(e) => antrianAdd(e)}>Antrikan !</button>&emsp;
                <button id="button-remove" type="button" onClick={(e) => antrianRemove(e)}>Majukan !</button>
            </form>
            <hr />
            <div className="text-center" id="display"></div>
      </div>
    )
}

export default Antrian;