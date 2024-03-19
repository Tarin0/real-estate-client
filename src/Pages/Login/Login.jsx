import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
// import { getToken } from "../../api/auth";


const Login = () => {
    const { signin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if ((email, password)) {
            signin(email, password)
                .then((result) => {
                    toast.success('User logged in successfully');
                    navigate(location?.state ? location?.state : '/');
                })
                .catch((err) => {
                    toast.error(err.message)
                });
        }
        else {
            toast.error("email or password can not be empty");
        }

    };

    return (
        <div className=" grid justify-center my-10">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-gray-400">Dont have account?
                    <Link to="/signup" className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <SocialLogin></SocialLogin>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400"/>
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400"/>
                        </div>
                        <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label  className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                </div>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Login</button>
                        </form>

                </div>
            </div>
            );
};

            export default Login;