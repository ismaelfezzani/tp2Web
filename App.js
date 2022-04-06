import logo from './logo.svg';
import './App.css';
import "./style.css"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'mongoose'

import 'bootstrap/dist/css/bootstrap.css';
import mongoose from 'mongoose';
import { render } from '@testing-library/react';


class App extends Component {
    state={
        data:[],
        loading:true,
        deck:[]
    }
    
    
    async componentDidMount(){
        const url="http://localhost:3001/cards"
        const response=await fetch(url)
        const data=await response.json()
        this.setState({data:data,loading:false})
    }

    
    
    choixCartes(champ){
        /*
        this.state.deck.push(champ)
        console.log(this.state.deck)
        */
       console.log("lol")
    }

    
   render(){

    if (this.state.loading || this.state.data===[]){
        return <div>loading...</div>
    }

    let data=this.state.data
    let deck=this.state.deck

    let cptCard=0;

    const persoList=data.map(key=>
        
        <div className='card col-lg-6 'id={key.id} onClick={()=>{
                console.log(cptCard)
                if (cptCard<=20){
                    console.log(key)
                    this.state.deck.push(key)
                    document.getElementById("deck").innerHTML+="<div class=\"card col-lg-6\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+key.key+"_0.jpg\">"
                    +"<div class=\"cardTitle\">"+key.name+"</div>"
                    +"<div className=\"cardText\">attaque: "+key.info.attack+ " defense: "+key.info.defense+ " magie: "+key.info.magic+"</div>"
                    +"</div>"
    
                    document.getElementById(key.id).hidden=true
                    console.log(this.state.deck)
                    cptCard+=1
                }
                
            }}>
            <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+key.key+"_0.jpg"}></img>
            <div className='cardTitle'>{key.name}</div>
            <div className='card-body'>
                
                <div className='cardText'>attaque: {key.info.attack} defense:{key.info.defense} magie:{key.info.magic}</div>
            </div>
        </div>
    
    )
    console.log(data)

    
    return(
        <div className='row'>
            <div className='column col-lg-6'>
                <div class="page-header bg-danger col-lg-4">
                    <h1>choississez vos cartes</h1>
                </div>
                <div className='row col-lg-6 col-xl-6' id='cardList'>{persoList}</div>

            </div>
            <div className='column col-lg-6'>
                <div class="page-header bg-primary col-lg-4">
                    <h1>vos cartes</h1>
                </div>
                <div className='row col-lg-6 col-xl-6' id='deck'></div>
            </div>
        </div>
    )
    

   }
    
}


export default App

//ReactDOM.render(<App />, document.getElementById('root')); 