import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Topbar from "../Topbar";
export default function Support() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({...form,[e.target.name]:e.target.value})
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://foodzo-assessment.onrender.com/user/support", form);
            toast.success(res.data.message);
            setForm({ name: "", email: "", message: "" }); 
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };
return (
        <><Topbar/>
         <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover">
                <source src="/video/hero.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="w-full min-h-screen flex justify-center items-center p-4 mt-20">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Contact Form
                </h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none focus:ring focus:ring-green-300 text-black"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none focus:ring focus:ring-green-300 text-black"/>
                    </div>
                    <div>
                        <label className="text-gray-700 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none h-32 resize-none focus:ring focus:ring-green-300 text-black"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-2">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        </>
        
    );
}
