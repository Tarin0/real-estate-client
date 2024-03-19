import toast from "react-hot-toast";
// import { getToken } from "../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            console.log(result);
            console.log(result?.user);
            console.log(result?.user?.email);
            const updatedUser = {
                name: result?.user?.displayName,
                photoURL : result?.user?.photoURL,
                role: 'member',
                status: 'verified'
            };
    
            const response = await fetch(`https://real-estate-server-one.vercel.app/user/${result?.user?.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Update User Role Response:", data);
                if (data.modifiedCount > 0) {
                    console.log("User role updated successfully");
                } 
                else {
                    console.log("User role not updated");
                }
                toast.success('User login  successfully');
                navigate('/');
            } else {
                throw new Error('Failed to update user role');
            }
        } catch (err) {
            toast.error(err?.message);
        }
    }
    
    return (
        <div>
            <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p >Login with <button onClick={handleGoogleLogin}>Google</button></p>
                    </button>
                   
                </div>
        </div>
    );
};

export default SocialLogin;