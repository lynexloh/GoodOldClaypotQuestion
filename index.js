
import React from 'react';
import ReactDOM from 'react-dom';

const claypot = (from, to) => {

	for( let i = from; i<to; i++){
	
	let f = {from %5}
	let t = {to %3}
	let t1 = {to %5}

	if (from === 0){
		console.log("Clay")
	}else if(t === 0 && t1 ===0){
		console.log("pot")
	}else{
		console.log(i)
	}
	}
	

}

ReactDOM.render(claypot, document.getElementById('app'));