'use client'
import { Card } from '@/components/ui/card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabsCom=()=>{
    return(
        <>
        <div className="w-full h-full max-w-2xl mx-auto bg-white p-4  rounded-md">
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
            <div className="tab-content-container overflow-x-auto max-w-full grid grid-cols-2 p-2 rounded">
              <div className='flex'>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
                <Card className="w-full max-w-sm bg-[#058AB3] p-2">
                <h1 className='text-start text-white'>05:10:10</h1>
                <img
                className="w-full  object-cover rounded-md flex justify-center items-center"
                  src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png"/>
                <p className='text-white'>US$ <span className='text-xl'>241</span> Milloin</p>
                </Card>
              </div>
              <span>
                
                </span>
              
             
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


// const game=[
//   {
//     id:'1',
//     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png'
//   }
// ]