import { PrimaryButton, SecondaryButton } from "./Button"

const ProfileUpdate = () => {
    return (
        <form className="mt-8 grid">
            <div className="lg:flex">
                <div className="lg:flex-1">
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 w-full md:w-5/6 h-12 px-4"
                    />
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 w-full md:w-5/6 h-12 px-4 my-5"
                    />
                    <textarea
                        id="bio"
                        placeholder="Bio"
                        className="rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 w-full md:w-5/6 h-36 px-4 py-2"
                    />
                    <input
                        id="age"
                        type="number"
                        placeholder="Age"
                        className="rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 w-full md:w-5/6 h-12 px-4 my-5"
                    />
                    <div>
                        <label className="text-sm">
                            Hobbies
                            <br />
                            <div className="w-full md:w-5/6 grid grid-flow-row-dense grid-cols-3 auto-cols-max">
                                <input
                                    id="age"
                                    type="string"
                                    placeholder="Enter your hobby"
                                    className="col-span-2 rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 h-12 px-4 w-full"
                                />
                                <div className="justify-self-end ml-2">
                                    <PrimaryButton msg="Add Hobby" />
                                </div>
                            </div>

                        </label>
                    </div>
                    <div className="my-6">
                        <label className="text-sm">
                            Skills
                            <br />
                            <div className="w-full md:w-5/6 grid grid-flow-row-dense grid-cols-3 auto-cols-max">
                                <input
                                    id="age"
                                    type="text"
                                    placeholder="Enter your skill"
                                    className="col-span-2 rounded text-text placeholder:text-text focus:outline-none border border-border focus:border-gray-500 h-12 px-4 w-full"
                                />
                                <div className="justify-self-end ml-2">
                                    <PrimaryButton msg="Add Skill" />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="lg:flex-1">
                    <div className="lg:flex">
                        <img
                            src="/Avatar.png"
                            alt="Avatar"
                            className="rounded-full h-36 w-36"
                        />
                        <div>
                            <div className="lg:text-right lg:justify-self-end text-text lg:ml-32">
                                Choose an avatar for
                                <br />
                                your profile
                            </div>
                            <div className="lg:ml-44 mt-6 lg:mt-12">
                                <SecondaryButton msg="Choose Avatar" />
                            </div>
                        </div>
                    </div>
                    Private Account
                    <input
                        id="private"
                        type="checkbox"
                        className="mx-10 my-16"
                    />
                </div>
            </div>
            <div className="justify-self-end">
                <PrimaryButton msg="save &amp; continue" />
            </div>
        </form>
    )
}

export default ProfileUpdate