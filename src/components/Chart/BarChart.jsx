import React from 'react'
import { Line } from 'react-chartjs-2'


const BarChart = (Alldata)=> {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  var color ='';
  color='rgba('+randomBetween(0, 255)+','+randomBetween(0, 255)+','+randomBetween(0, 255)
    return <div>
              <div>{
                      <Line 
                      data={{
                          labels: [1950,1960,1970,1980,1990,1995, 2000,2005,2010,2011,2012,2013,2014, 2015,2016,2017,2018,2019, 2020],
                          datasets: [
                            {
                              label: 'Vehicle production in ' + Alldata.data.country,
                              data: Alldata.data.data,
                              backgroundColor: [
                                color+', 0.2)',
                              ],
                              borderColor: [
                                color+')',
                              ],
                              borderWidth: 1,
                              fill: true,
                            },
              
                          ],
                          options: {
                              responsive: true, // Instruct chart js to respond nicely.
                              maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                            }
                        }}
                        options={{
                          legend: {
                            labels: {
                              fontSize: 25,
                            },
                          },
                            
                        }}
                      />
                }
                </div>
            </div>
}

export default BarChart