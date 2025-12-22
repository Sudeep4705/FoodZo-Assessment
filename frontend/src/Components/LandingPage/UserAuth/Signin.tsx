import axios from "axios";
import { useState } from "react"
import type { ChangeEvent, FormEvent} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate  = useNavigate()
    const [user,setuser] = useState({
        email:"",
        password:""
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault()
        const res = await axios.post("https://foodzo-assessment.onrender.com/user/login",user,{withCredentials:true})
        toast.success(res.data.message)
        setTimeout(()=>{
            navigate("/")
        },1000)


    }
    return(
        <>
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="p-3 border rounded-lg shadow-sm outline-none focus:ring-2 text-black"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="p-3 border rounded-lg shadow-sm outline-none focus:ring-2 text-black"
                />
            </div>
            <button className="mt-4 bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-200">
                SignIn
            </button>
        </form>
    </div>
</div>

        </>
    )
}