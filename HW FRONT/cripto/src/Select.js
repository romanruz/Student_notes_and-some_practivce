import React, { Component } from "react";
import axios from 'axios';
import Chart from './chart'
import SelectArchive from './SelectArchive'


class Select extends Component {
constructor(props){
  super(props);
  this.state = {
    value:'',  
  };
}
componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR`)
      .then(res => {
        const coin  = res;
        this.setState({
          USD:{ bitcoinPrice:this.getApi(coin,'USD',1),
                etheriumPrice:this.getApi(coin,'USD',1027),
                ripplePrice:this.getApi(coin,'USD',52),
                cardanoPrice:this.getApi(coin,'USD',2010),
                litecoinePrice:this.getApi(coin,'USD',2)},
          EURO:{bitcoinPrice:this.getApi(coin,'EUR',1),
                etheriumPrice:this.getApi(coin,'EUR',1027),
                ripplePrice:this.getApi(coin,'EUR',52),
                cardanoPrice:this.getApi(coin,'EUR',2010),
                litecoinePrice:this.getApi(coin,'EUR',2)} 
        });
      })
  axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=RUB`)
    .then(res=>{
      const rubapi = res
      this.setState({
        RUB: {
          bitcoinPrice:this.getApi(rubapi,'RUB',1),
          etheriumPrice:this.getApi(rubapi,'RUB',1027),
          ripplePrice:this.getApi(rubapi,'RUB',52),
          cardanoPrice:this.getApi(rubapi,'RUB',2010),
          litecoinePrice:this.getApi(rubapi,'RUB',2),
    }
      })
      
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
    return this.state.EURO[cripta]

  }
  if(currency === 'RUB'){
    return this.state.RUB[cripta]
  }
}
getApi = (json,currency,currencyId)=>{
  if(currency === 'USD'){
    return json.data.data[`${currencyId}`].quotes.USD.price
  }
  if(currency==='EUR'){
    return json.data.data[`${currencyId}`].quotes.EUR.price
  }
  if(currency==='RUB'){
    return json.data.data[`${currencyId}`].quotes.RUB.price
  }
}
convertClick = ()=>{
  if (this.state.value ===''){
    alert('choose currensy');
    return
  }
 if (this.valueInput.value.match(/^[-\+]?\d+/) === null) {
  alert('input value');
  return
}
if (this.convertSelect.value === 'title'){
  alert('choose cripta epta');
  return
}
  let num = parseInt(this.valueInput.value.replace(/\D+/g,""));
  let calc = (num)*(this.state[this.state.value][this.convertSelect.value])
  calc.toFixed(1)
  let currency = this.convertSelect.value.split(/[A-Z]/)
  let answer = `За ${num} ${currency[0]} вы получите ${calc.toFixed(2)} ${this.state.value} `
  this.span.innerText = answer
}



  render() {
    return (
        <div>
            <select className={this.props.name} onChange={this.onChangeHandler}>
              <option value="title" disable>Выберите валюту</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="RUB">RUB</option>
            </select>
            <span>Bitcoin{this.criptoCurrencyCalc(this.state.value,'bitcoinPrice')}</span>
            <span>Etherium{this.criptoCurrencyCalc(this.state.value,'etheriumPrice')}</span>
            <span>Ripple{this.criptoCurrencyCalc(this.state.value,'ripplePrice')}</span> 
            <span>Cardano{this.criptoCurrencyCalc(this.state.value,'cardanoPrice')}</span>
            <span>LiteCoine{this.criptoCurrencyCalc(this.state.value,'litecoinePrice')}</span>
            <div>
            <h1>Cryptocurrency Converter Calculator</h1>
            <input className = 'valueInput' ref={(input)=>this.valueInput = input}/><br/>
            <select ref={(select)=>this.convertSelect = select}>
              <option value="title" disable>Выберите крипту</option>
              <option value="bitcoinPrice">Bitcoin</option>
              <option value="etheriumPrice">Etherium</option>
              <option value="ripplePrice">Ripple</option>
              <option value="cardanoPrice">Cardano</option>
              <option value="litecoinePrice">LiteCoine</option>
              </select>
              <br/>
              <button onClick={this.convertClick}>CONVERT</button>
              <br/>
            <span ref={(span)=>this.span = span}></span>
            </div>
            <Chart />
            <SelectArchive />
        </div>    
    );
  }
}

export default Select;