import React from 'react'

const About = () => {
  return (
    <div className='w-[100%] p-6'>
        <h1 className='text-center text-2xl font-bold p-7'>Information about this app</h1>
        <p className=' font-normal text-md leading-6'>In my React authentication app, I have implemented a range of essential features to ensure secure user authentication. Users can easily sign up and login using a database that stores their information, including hashed passwords for added security. To facilitate seamless authentication, I have integrated JWT (JSON Web Token) tokens, which provide a unique and encrypted identifier for each user session. Additionally, I have implemented a verification process that ensures users have a unique email address, preventing duplicate registrations and enhancing the overall security of the application. With these features in place, my React authentication app offers a robust and reliable authentication system for users.</p>
    </div>
  )
}

export default About