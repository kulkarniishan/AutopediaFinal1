import React from 'react';
import './App.css'
import BarChart from './components/Chart/BarChart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import SalesData from './vehicleProduction.json';


class App extends React.Component{

  state={
    data:SalesData.Global,
    country:'Global'
  }

  handleCountryChange =(country) =>{
    console.log(country);
    this.setState({data:SalesData[country], country:country}) 
    console.log(this.state)
  }

  render(){
  return (
    <div className="App">
      <div className="chart">
      <CountryPicker data={SalesData} handleCountryChange={this.handleCountryChange}/>
      <BarChart data={this.state}/>
      </div>
    </div>
  );
    }
}

export default App;
