'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabsCom=()=>{
    return(
        <>
        <div className="w-full h-full max-w-2xl mx-auto bg-white p-4 rounded shadow-md rounded-md">
      <Tabs>
        <TabList>
          <Tab>Entries</Tab>
          <Tab>Deposit</Tab>
          <Tab>Withdrawals</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-4">
            <div className='flex justify-between'>
                <h6 className="text-lg font-semibold mb-2">Lottery</h6>
            <h6 className="text-lg font-semibold mb-2">Game</h6>
            </div>
            <div className="flex justify-between bg-gray-100 p-2 rounded">
              <span>14 June 16:10</span>
              <span>Japan - Power Lottery</span>
              <span>$0.00</span>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-4">
            <div className='flex justify-between'>
                <h6 className="text-lg font-semibold mb-2">Date</h6>
            <h6 className="text-lg font-semibold mb-2">Lottery</h6>
            <h6 className="text-lg font-semibold mb-2">Amount</h6>
            </div>
            <div className="flex justify-between bg-gray-100 p-2 rounded">
              <span>14 June 16:10</span>
              <span>$0.00</span>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-4">
            <div className='flex justify-between'>
                <h6 className="text-lg font-semibold mb-2">Date</h6>
            <h6 className="text-lg font-semibold mb-2">Amount</h6>
            </div>
            <div className="flex justify-between bg-gray-100 p-2 rounded">
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