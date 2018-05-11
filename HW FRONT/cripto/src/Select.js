import React, { Component } from "react";
import axios from 'axios';


class Select extends Component {
constructor(props){
  super(props);
  this.state = {
    value:'',
    USD: {
      BitcoinUSDPrice:'',
      EtheriumUSDPrice:'',
      RippleUSDPrice:'',
      CardanoUSDPrice:'',
      LiteCoineUSDPrice:'',
    },
    EURO: {
      BitcoinEUROPrice:'',
      EtheriumEUROPrice:'',
      RippleEUROPrice:'',
      CardanoEUROPrice:'',
      LiteCoineEUROPrice:'',
    },

    
  };
}
componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR`)
      .then(res => {
        const coin  = res;
        this.setState({
          USD:{ BitcoinPrice:coin.data.data[1].quotes.USD.price,
                EtheriumPrice:coin.data.data[1027].quotes.USD.price,
                RipplePrice:coin.data.data[52].quotes.USD.price,
                CardanoPrice:coin.data.data[2010].quotes.USD.price,
                LiteCoinePrice:coin.data.data[2].quotes.USD.price},
          EURO:{BitcoinPrice:coin.data.data[1].quotes.EUR.price,
                EtheriumPrice:coin.data.data[1027].quotes.EUR.price,
                RipplePrice:coin.data.data[52].quotes.EUR.price,
                CardanoPrice:coin.data.data[2010].quotes.EUR.price,
                LiteCoinePrice:coin.data.data[2].quotes.EUR.price},
          RUB:{ BitcoinPrice:coin.data.data[1].quotes.RUB.price,
                EtheriumPrice:coin.data.data[1027].quotes.RUB.price,
                RipplePrice:coin.data.data[52].quotes.RUB.price,
                CardanoPrice:coin.data.data[2010].quotes.RUB.price,
                LiteCoinePrice:coin.data.data[2].quotes.RUB.price}
              });
        
      })
  }
onChangeHandler = ()=>{
  let elem  = document.getElementsByTagName('select');
  this.setState({value:elem[0].value});
  console.log (this.state.value)
  
}
criptoCurrencyCalc = (currency,cripta)=>{
  if(currency == 'USD'){
    //тут буду выяснять курс и тип крипты
    return this.state.USD[cripta]
  }
  if(currency == 'EURO'){
    console.log('chek')
    return this.state.EURO[cripta]

  }
  if(cripta == 'RUB'){
    return 'grivnya'
  }
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
            <span>Bitcoin{this.criptoCurrencyCalc(this.state.value,'BitcoinPrice')}</span> 
            <span>Etherium{this.criptoCurrencyCalc(this.state.value,'EtheriumPrice')}</span>
            <span>Ripple{this.criptoCurrencyCalc(this.state.value,'RipplePrice')}</span> 
            <span>Cardano{this.criptoCurrencyCalc(this.state.value,'CardanoPrice')}</span>
            <span>LiteCoine{this.criptoCurrencyCalc(this.state.value,'LiteCoinePrice')}</span>
        </div>
          
    );
  }
}

export default Select;