'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabsCom=()=>{
    return(
        <>
        <div className="w-full h-full max-w-2xl mx-auto bg-white p-4  shadow-md rounded-md">
      <Tabs>
        <TabList>
          <Tab>Entries</Tab>
          <Tab>Deposit</Tab>
          <Tab>Withdrawals</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-4">
            <div className='grid grid-cols-2 gap-4 bg-gray-300'>
                <h6 className="text-lg ">Lottery</h6>
            <h6 className="text-lg ">Game</h6>
            </div>
            <div className="grid grid-cols-2  p-2 rounded">
              <span>14 June 16:10</span>
              <span>Japan - Power Lottery</span>
             
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-4">
            <div className='grid grid-cols-3 gap-4 bg-gray-300'>
                <h6 className="text-lg ">Date</h6>
            <h6 className="text-lg ">Lottery</h6>
            <h6 className="text-lg ">Amount</h6>
            </div>
            <div className="grid grid-cols-3  p-2 rounded">
              <span>14 June 16:10</span>
              <span>$0.00</span>
              <span>$0.00</span>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-4">
            <div className='grid grid-cols-2 gap-4 bg-gray-300'>
                <h6 className="text-lg ">Date</h6>
            <h6 className="text-lg ">Amount</h6>
            </div>
            <div className="grid grid-cols-2 p-2 rounded">
              <span>14 June 16:10</span>
              <span>$0.00</span>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
        </>
    )
}
export default TabsCom;