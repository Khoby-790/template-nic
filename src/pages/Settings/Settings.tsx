/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, SetStateAction, Suspense, useState } from 'react'
import General from './General';

interface Props {

}


type Tab = "general" | "password" | "notifications" | "plan" | "billing";

const Settings = (props: Props) => {
    const [tab, setTab] = useState<Tab>("general")
    return (
        <Fragment>
            <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
                <div className="relative max-w-full mx-10 md:px-8 xl:px-0">
                    <div className="pt-10 pb-16">
                        <div className="px-4 sm:px-6 md:px-0">
                            <h1 className="text-md font-extrabold text-gray-900">Settings</h1>
                        </div>
                        <div className="px-4 sm:px-6 md:px-0">
                            <div className="py-6">
                                {/* <!-- Tabs --> */}
                                <div className="lg:hidden">
                                    <label htmlFor="selected-tab" className="sr-only">Select a tab</label>
                                    <select id="selected-tab" name="selected-tab" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-md rounded-md">
                                        <option selected>General</option>
                                        <option>Password</option>
                                        <option>Notifications</option>
                                        <option>Plan</option>
                                        <option>Billing</option>
                                        <option>Team Members</option>
                                    </select>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="border-b border-gray-200">
                                        <nav className="-mb-px flex">
                                            {/* <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                                            <NavTab value={tab} first={true} name="General" tab="general" setTab={setTab} />
                                            <NavTab value={tab} name="Password" tab="password" setTab={setTab} />
                                            <NavTab value={tab} name="Notifcations" tab="notifications" setTab={setTab} />
                                            <NavTab value={tab} name="Billing" tab="billing" setTab={setTab} />
                                            {/* <NavTab value={tab} name="General" tab="general" setTab={setTab} /> */}
                                        </nav>
                                    </div>
                                </div>

                                <Suspense fallback={<h1>Loading</h1>}>
                                    {tab === "general" && <General />}
                                </Suspense>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Settings;


type NavTabProps = {
    setTab: React.Dispatch<SetStateAction<Tab>>;
    tab: Tab;
    first?: boolean;
    name: string;
    value: Tab
}


const NavTab = ({ setTab, tab, first = false, name, value }: NavTabProps) => {
    return (
        <a
            onClick={() => setTab(tab)}
            href="#"
            className={`${tab === value ? "border-purple-500 text-purple-600" : "border-transparent text-gray-500"}  ${first ? "" : "ml-8"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md`}>
            {name}
        </a>
    )
}