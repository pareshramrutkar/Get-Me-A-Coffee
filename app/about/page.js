import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">About Get Me a Coffee</h1>
              <p className="text-lg mb-6">
                  Get Me a Coffee is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a Coffees. Unlock the potential of your fanbase and bring your projects to life. 
                </p>

        <h2 className="text-2x1 font-semibold mb-4">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center mb-6">
            <img className="w-20 h-20 rounded-full mr-4" src="/coin.gif" alt="Fans Want to Collaborate" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fans Want to Collaborate</h3>
              <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center mb-6">
            <img className="w-20 h-20 rounded-full mr-4" src="/group.gif" alt="Fans Want to Collaborate" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fans Want to Contibute</h3>
              <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center mb-6">
            <img className="w-20 h-20 rounded-full mr-4" src="/man.gif" alt="Fans Want to Collaborate" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fans Want to Contibute</h3>
              <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
            </div>
          </div>
        </div>
            <div className='mx-24'>
            <h2 className="text-2x1 font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                <li className="mb-2">Participate in discussions and events centered around your interests</li>
              { /* Add more benefits */}
            </ul>

            <h2 className="text-2x1 font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
              <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
              <li className="mb-2">Stay updated on industry trends and best practices</li>
              {/* Add more benefits */}
            </ul>

            <h2 className="text-2x1 font-semibold mb-4">Recognition and Exposure</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
              <li className="mb-2">Feature in promotional materials and campaigns</li>
              <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
            </ul>
            </div>
          </div>
    </>
  )
}

export default About

export const metadata = {
    title: "About - Get Me A Coffee"
  }