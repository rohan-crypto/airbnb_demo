import React from 'react'
import {GlobeAltIcon} from '@heroicons/react/solid'

function Footer() {
    return (
        <>
        {/* dont use space-y-n instead use gap-y-n whenever using grid  */}
        {/* so that all the columns will start from the same level  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10
            mt-16 px-24 py-12 bg-gray-100">
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-semibold">ABOUT</h5>
                <p className="hover:underline cursor-pointer">How Airbnb works</p>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Airbnb 2021</p>
                <p className="hover:underline cursor-pointer">Investors</p>
                <p className="hover:underline cursor-pointer">Airbnb Plus</p>
                <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
                <p className="hover:underline cursor-pointer">Hotel Tonight</p>
                <p className="hover:underline cursor-pointer">Careers</p>
                <p className="hover:underline cursor-pointer">Founder's Letter</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-semibold">COMMUNITY</h5>
                <p className="hover:underline cursor-pointer">Diversity & Belonging</p>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">Airbnb Associates</p>
                <p className="hover:underline cursor-pointer">Frontline Stays</p>
                <p className="hover:underline cursor-pointer">Guest Referrals</p>
                <p className="hover:underline cursor-pointer">Airbnb.org</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-semibold">HOST</h5>
                <p className="hover:underline cursor-pointer">Host your home</p>
                <p className="hover:underline cursor-pointer">Host an Online Experience</p>
                <p className="hover:underline cursor-pointer">Host an Experience</p>
                <p className="hover:underline cursor-pointer">Responsible hosting</p>
                <p className="hover:underline cursor-pointer">Resource Centre</p>
                <p className="hover:underline cursor-pointer">Community Centre</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-semibold">SUPPORT</h5>
                <p className="hover:underline cursor-pointer">Our COVID-19 Response</p>
                <p className="hover:underline cursor-pointer">Help Centre</p>
                <p className="hover:underline cursor-pointer">Cancellation options</p>
                <p className="hover:underline cursor-pointer">Neighbourhood Support</p>
                <p className="hover:underline cursor-pointer">Trust & Safety</p>
            </div>
        </div>
        <div className="bg-gray-100">
        <div className="border-gray-300 h-px border-t max-w-6xl mx-auto"></div>
        <div className="py-6 max-w-6xl mx-auto text-sm flex justify-between items-center">
            <div className="flex text-gray-800">
                <p>© 2021 Airbnb, Inc.</p>
                <p>&nbsp; · &nbsp;</p>
                <p className="hover:underline cursor-pointer">Privacy</p>
                <p>&nbsp; · &nbsp;</p>
                <p className="hover:underline cursor-pointer">Terms</p>
                <p>&nbsp; · &nbsp;</p>
                <p className="hover:underline cursor-pointer">Sitemap</p>
                <p>&nbsp; · &nbsp;</p>
                <p className="hover:underline cursor-pointer">Company details</p>
            </div>
            <div className="flex items-center w-72 justify-between">
                <div className="flex">
                    <GlobeAltIcon className="h-5 cursor-pointer mr-1 text-gray-900"/>
                    <span className="font-semibold text-sm mr-4 text-gray-900
                        underline cursor-pointer">English (IN)</span>
                    <span className="mr-2 text-gray-900 cursor-pointer">₹</span>
                    <span className="font-semibold text-sm underline text-gray-900
                        cursor-pointer">INR</span>
                </div>
                <div className="flex space-x-5">
                    <svg className="cursor-pointer text-gray-900" viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Facebook" focusable="false" style={{height: '18px', width: '18px', display: 'block', fill: 'currentcolor'}}><path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fill-rule="evenodd"></path></svg>
                    <svg className="cursor-pointer text-gray-900" viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Twitter" focusable="false" style={{height: '18px', width: '18px', display: 'block', fill: 'currentcolor'}}><path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16" fill-rule="evenodd"></path></svg>
                    <svg className="cursor-pointer text-gray-900" viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="Navigate to Instagram" focusable="false" style={{height: '18px', width: '18px', display: 'block', fill: 'currentcolor'}}><path d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z" fill-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer;
