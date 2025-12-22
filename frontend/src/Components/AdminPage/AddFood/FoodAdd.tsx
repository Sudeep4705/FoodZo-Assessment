import { useState} from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function AddFood() {
    const [food, setFood] = useState({
        hotelname: "",
        foodname: "",
        price: "",
        description: "",
    });
    const [image, setImage] = useState<File | null>(null);

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setFood({...food,[e.target.name]:e.target.value})
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = new FormData();
        form.append("hotelname", food.hotelname);
        form.append("foodname", food.foodname);
        form.append("price", food.price);
        form.append("description", food.description);

        if (image) {
            form.append("image", image);
        }

        try {
            const res = await axios.post("https://foodzo-assessment.onrender.com/food/add", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success(res.data.message)
            
        } catch(err:any) {
   toast.error(err.response.data.message);
}
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-4 mt-20">
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                <div className="p-6 bg-gray-50">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Add Food
                    </h1>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-gray-700 font-medium">Hotel Name</label>
                            <input
                                type="text"
                                name="hotelname"
                                value={food.hotelname}
                                onChange={handleInputChange}
                                placeholder="Enter hotel name"
                                className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none focus:ring focus:ring-green-300 text-black"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Food Name</label>
                            <input
                                type="text"
                                name="foodname"
                                value={food.foodname}
                                onChange={handleInputChange}
                                placeholder="Enter food name"
                                className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none focus:ring focus:ring-green-300 text-black"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Price</label>
                            <input
                                type="text"
                                name="price"
                                value={food.price}
                                onChange={handleInputChange}
                                placeholder="Enter price"
                                className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none focus:ring focus:ring-green-300 text-black"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Description</label>
                            <textarea
                                name="description"
                                value={food.description}
                                onChange={handleInputChange}
                                placeholder="Write food description..."
                                className="w-full mt-1 p-2 border rounded-lg shadow-sm outline-none h-24 resize-none focus:ring focus:ring-green-300 text-black"
                            ></textarea>
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Food Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="w-full mt-1 border p-2 rounded-lg cursor-pointer bg-white shadow-sm text-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="bg-gray-100 flex justify-center items-center p-4">
                    <img
                        src="/Images/food1.jpg"
                        className="w-full h-full object-cover rounded-lg"
                        alt="Food"
                    />
                </div>
            </div>
        </div>
    );
}
