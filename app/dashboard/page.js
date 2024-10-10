"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return redirect('/');
    // <div>Access Denied</div>;
  }
    if (!session) {
        const router = useRouter();
        router.push('/login');
  }
 

  
  

  return (
    <>
    <section className="relative lg:pb-24 pb-16">
    <div className="container-fluid">
      <div className="profile-banner relative text-transparent">
        <div className="relative shrink-0">
          <Image
            src="/cover.jpg"
            alt="Profile Banner"
            width={1920}
            height={320}
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>
    </div>

    <div className="container lg:mt-24 mt-16">
      <div className="md:flex">
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
          <div className="relative md:-mt-48 -mt-32">
            <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
              <div className="profile-pic text-center mb-5">
                <div>
                  <div className="relative h-28 w-28 mx-auto">
                    <Image
                      src="/cat.jpg"
                      className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                      alt="Profile"
                      width={112}
                      height={112}
                    />
                  </div>
                  <div className="mt-4">
                    <h5 className="text-lg font-semibold">{session.user.name}</h5>
                    <p className="text-slate-400">{session.user.email}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700">
                <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
                  {/* Add list items for sidebar navigation */}
                  {/* Example: */}
                  <li className="navbar-item account-menu active">
                    <Link href="/user-profile" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                      <span className="mr-2 text-[18px] mb-0"><i className="uil uil-dashboard"></i></span>
                      <h6 className="mb-0 font-semibold">Profile</h6>
                    </Link>
                  </li>
                  {/* Add more list items as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">{session.user.name}</h5>
            <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] pt-6">
            {/* Personal Details */}
            <div>
              <h5 className="text-xl font-semibold">Personal Details :</h5>
              <div className="mt-6">
                {/* Add personal details items */}
                {/* Example: */}
                <div className="flex items-center mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail text-slate-400 mr-3">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Email :</h6>
                    <a href="mailto:jennyhot@hotmail.com" className="text-slate-400">{session.user.email}</a>
                  </div>
                </div>
                {/* Add more personal details items */}
              </div>
            </div>

            {/* Experience */}
            <div className="mt-[30px] lg:mt-0">
              <h5 className="text-xl font-semibold">Experience :</h5>
              {/* Add experience items */}
              {/* Example: */}
              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                <Image src="/assets/images/client/circle-logo.png" alt="CircleCi" width={64} height={64} className="h-16 w-16 p-4 bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md" />
                <div className="flex-1 content ml-4">
                  <h4 className="text-lg text-medium">Full stack Web Developer</h4>
                  <p className="text-slate-400 mb-0">Fresher</p>
                  <p className="text-slate-400 mb-0"><a href="#" className="text-indigo-600">Manipal</a> @Jaipur, Rajasthan</p>
                </div>
              </div>
              {/* Add more experience items */}
            </div>
          </div>

          {/* Portfolio */}
          <h5 className="text-xl font-semibold mt-[30px]">Portfolio :</h5>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
            {/* Add portfolio items */}
            {/* Example: */}
            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
              <Image src="/assets/images/portfolio/1.jpg" alt="Portfolio" width={400} height={300} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" />
              <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>
              <div className="content transition-all duration-500">
                <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                  <a href="/assets/images/portfolio/1.jpg" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"><i className="uil uil-camera"></i></a>
                </div>
                <div className="title absolute z-10 hidden group-hover:block bottom-6 left-6">
                  <Link href="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                  <p className="text-slate-400 mb-0">Abstract</p>
                </div>
              </div>
            </div>
            {/* Add more portfolio items */}
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default page
