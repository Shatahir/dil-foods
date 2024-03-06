import React from 'react'
import Piechart from './PieChart'
import Barchat from './BarChat'
import LinesChart from './LinesChart'

function Charts() {
  return (
    <>
      <div className='mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center'>
        <div>
          <LinesChart />
        </div>
        <div>
          <Piechart />
        </div>
        <div>
          <Barchat />
        </div>
      </div>
    </>
  )
}

export default Charts
