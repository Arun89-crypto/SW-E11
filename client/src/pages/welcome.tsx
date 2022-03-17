import ProfileUpdate from "../shared/components/ProfileUpdate";

const Welcome = () => {
    return (
        <div className="m-12">
            <div className="text-secondary font-semibold text-3xl">
                Welcome,
            </div>
            <div className="text-lg">
                Tell us about yourself.
            </div>
            <div className="ml-40 mr-10">
                <ProfileUpdate />
            </div>
        </div>
    )
}

export default Welcome;