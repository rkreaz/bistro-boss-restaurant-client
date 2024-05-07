import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div>
            <h1 className="text-5xl mt-14 ml-6 font-bold text-center text-[#9C0C0C]">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div className="flex items-center gap-10 justify-center min-h-screen">
                <div className="avatar w-1/2 bg-[#9C0C0C] py-20 rounded-lg">
                    <div className="w-40 rounded-full ring ring-primary ring-offset-2 mx-auto">
                        <img src={user?.photoURL} />
                    </div>
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl font-semibold">{user?.displayName}</h1>
                    <p className="text-lg font-medium">{user?.email}</p>
                    <p className="text-lg font-medium">{user?.metadata?.creationTime}</p>
                    <p className="text-lg font-medium">{user?.metadata?.lastSignInTime}</p>

                </div>

            </div>
        </div>
    );
};

export default UserHome;