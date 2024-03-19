import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Signup = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(location.state);
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password length at least six characters , one Capital letter & one special character:');
            return;
        }
        else {


            try {
                const result = await createUser(email, password)
                await updateUserProfile(name, photo);
                const updatedUser = {
                    name : name,
                    photoURL : photo,
                    role: 'member',
                    status: 'verified'
                };
        
                const response = await fetch(`http://localhost:5000/user/${result?.user?.email}`, {
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

            }
            catch (err) {
                toast.error(err?.message);
            }

            // createUser(email, password)
            //     .then(result => {
            //         // console.log(result.user);
            //         toast.success('User registered  successfully');
            //         const user = { email, name, photo };
            //         fetch('https://job-portal-server-lemon.vercel.app/user', {
            //             method: 'POST',
            //             headers: {
            //                 'content-type': 'application/json'
            //             },
            //             body: JSON.stringify(user)
            //         })
            //             .then(res => res.json())
            //             .then(data => {
            //                 console.log(data);
            //                 if (data.insertedId) {
            //                     toast.success('User added in DB');
            //                     navigate('/');
            //                 }
            //             })
            //     })
            //     .catch(error => {
            //         toast.error(error.message)
            //     })

        }
    }

    return (
        <div className=" grid justify-center my-10">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center text-gray-400">Have account?
                <Link to="/login" className="focus:underline hover:underline"> Login here</Link>
            </p>
            {/* <SocialLogin></SocialLogin> */}
            {/* <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-400"/>
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400"/>
                    </div> */}
                    <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label  className="block text-sm">User Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <label  className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <label  className="block text-sm">Photo URL</label>
                                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Up</button>
                    </form>

            </div>
        </div>
    );
};

export default Signup;