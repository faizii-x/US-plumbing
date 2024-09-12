
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
        title: 'Our Mission is to provide top-notch Demolition and Plumbing solutions that go beyond what our clients expect. We focus on safety, efficiency, and sustainability to ensure exceptional service and success in every project we handle.',
        image: '/public/png/about1.png'
      },
      
    ],
    OurVision: [
      {
        id: 1,
        title: 'At A1 Demolition & Plumbing, customer satisfaction is paramount. We are committed to meeting your needs and surpassing your expectations with top-notch demolition and plumbing services. With our dedicated team, expect efficient and timely solutions tailored to your requirements.',
        image: '/public/png/about1.png'
      },
      
    ],
    OurPriority: [
      {
        id: 1,
        title: 'Customer satisfaction is our top priority at SM Electrical Corp. We prioritize your needs and strive to exceed your expectations with high-quality electrical solutions. Our dedicated team ensures efficient and timely service, making your satisfaction our ultimate goal.',
        image: '/public/png/about1.png'
      },
    
    ],
  })

  return (
    <div className="lg:w-[85%] w-full mt-6">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blacks p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-[18px] font-medium',
                  'ring-white/60 ring-offset-2 ring-[#5cdddd] focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-black shadow'
                    : 'text-customBlue-light hover:bg-customBlue-light hover:text-white'
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
                    className="relative rounded-md p-4 border hover:bg-gray-100"
                  >
                    <h3 className="text-[18px] font-normal font-Roboto  text-blacks">
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

