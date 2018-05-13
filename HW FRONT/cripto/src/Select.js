import React, { Component } from "react";
import axios from 'axios';
import Chart from './chart'


class Select extends Component {
constructor(props){
  super(props);
  this.state = {
    value:'',
    USD: {
      bitcoinUSDPrice:'',
      etheriumUSDPrice:'',
      rippleUSDPrice:'',
      cardanoUSDPrice:'',
      liteCoineUSDPrice:'',
    },
    EURO: {
      bitcoinEUROPrice:'',
      etheriumEUROPrice:'',
      rippleEUROPrice:'',
      cardanoEUROPrice:'',
      liteCoineEUROPrice:'',
    },
    RUB: {
      bitcoinEUROPrice:'',
      etheriumEUROPrice:'',
      rippleEUROPrice:'',
      cardanoEUROPrice:'',
      liteCoineEUROPrice:'',
    }

    
  };
}
componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR`)
      .then(res => {
        const coin  = res;
     
        this.setState({
          USD:{ bitcoinPrice:this.getApi(coin,'USD',1),
                etheriumPrice:coin.data.data[1027].quotes.USD.price,
                ripplePrice:coin.data.data[52].quotes.USD.price,
                cardanoPrice:coin.data.data[2010].quotes.USD.price,
                liteCoinePrice:coin.data.data[2].quotes.USD.price},
          EURO:{bitcoinPrice:this.getApi(coin,'EUR',1),
                etheriumPrice:coin.data.data[1027].quotes.EUR.price,
                ripplePrice:coin.data.data[52].quotes.EUR.price,
                cardanoPrice:coin.data.data[2010].quotes.EUR.price,
                liteCoinePrice:coin.data.data[2].quotes.EUR.price}
          
        });
      })
  }

 

onChangeHandler = (e)=>{
  this.setState({value:e.target.value});  
}
criptoCurrencyCalc = (currency,cripta)=>{
  if(currency === 'USD'){
    //тут буду выяснять курс и тип крипты
    return this.state.USD[cripta]
  }
  if(currency === 'EURO'){
    console.log('chek')
    return this.state.EURO[cripta]

  }
  if(cripta === 'RUB'){
    return 'grivnya'
  }
}
getApi = (json,currency,currencyId)=>{
  if(currency === 'USD'){
    return json.data.data[`${currencyId}`].quotes.USD.price
  }
  if(currency==='EUR'){
    return json.data.data[`${currencyId}`].quotes.EUR.price
  }
}
convertClick = ()=>{
  let calc = (this.valueInput.value)*(this.state[this.state.value][this.convertSelect.value])
  calc.toFixed(1)
  console.log (calc);
  let currency = this.convertSelect.value.split(/[A-Z]/)
  let answer = `За ${this.valueInput.value} ${currency[0]} вы получите ${calc.toFixed(2)} ${this.state.value} `
  this.span.innerText = answer
}



  render() {
    return (
        <div>
            <select className={this.props.name} onChange={this.onChangeHandler}>
              <option value="title" disable>Выберите валюту</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="GRN">GRN</option>
            </select>
            <span>Bitcoin{this.criptoCurrencyCalc(this.state.value,'bitcoinPrice')}</span> 
            <span>Etherium{this.criptoCurrencyCalc(this.state.value,'etheriumPrice')}</span>
            <span>Ripple{this.criptoCurrencyCalc(this.state.value,'ripplePrice')}</span> 
            <span>Cardano{this.criptoCurrencyCalc(this.state.value,'cardanoPrice')}</span>
            <span>LiteCoine{this.criptoCurrencyCalc(this.state.value,'liteCoinePrice')}</span>
            <div>
            <h1>Cryptocurrency Converter Calculator</h1>
            <input className = 'valueInput' ref={(input)=>this.valueInput = input}/><br/>
            <select ref={(select)=>this.convertSelect = select}>
              <option value="title" disable>Выберите крипту</option>
              <option value="bitcoinPrice">Bitcoin</option>
              <option value="etheriumPrice">Etherium</option>
              <option value="ripplePrice">Ripple</option>
              <option value="cardanoPrice">Cardano</option>
              <option value="liteCoinePrice">LiteCoine</option>
              </select>
              <br/>
              <button onClick={this.convertClick}>CONVERT</button>
              <br/>
           
            <span ref={(span)=>this.span = span}></span>
            </div>
            <Chart />
        </div>
        
        
        
          
    );
  }
}

export default Select;