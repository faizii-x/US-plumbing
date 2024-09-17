
import { useState } from 'react'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    OurMission: [
      {
        id: 1,
        title: 'Our Mission is to provide top-notch A1 Plumbing solutions that go beyond what our clients expect. We focus on safety, efficiency, and sustainability to ensure exceptional service and success in every project we handle.',
        image: '/public/png/about1.png'
      },
      
    ],
    OurVision: [
      {
        id: 1,
        title: 'Our Vision is to excel in demolition and plumbing services, providing efficient solutions and ensuring utmost customer satisfaction. Experience excellence firsthand by contacting us today at +1 (917) 250-12345',
        image: '/public/png/about1.png'
      },
      
    ],
    OurPriority: [
      {
        id: 1,
        title: 'At A1 Plumbing, customer satisfaction is paramount. We are committed to meeting your needs and surpassing your expectations with top-notch demolition and plumbing services. With our dedicated team, expect efficient and timely solutions tailored to your requirements.',
        image: '/public/png/about1.png'
      },
    
    ],
  })

  return (
    <div className=" w-full mt-6">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blacks p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-[18px] font-medium',
                  'ring-white/60 ring-offset-2 ring-[#5cdddd] focus:outline-none focus:ring-2 ',
                  selected
                    ? 'bg-customBlue-light text-white shadow'
                    : 'text-customBlue-light hover:bg-customBlue-light hover:text-white '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white ',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-4 border "
                  >
                    <h3 className="text-[18px] font-normal font-Roboto  text-[#1F1F1F]">
                      {post.title}
                    </h3>
                    <img src={post.img} alt="" />
                   

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

