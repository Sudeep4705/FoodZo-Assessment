import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
interface FoodType {
     _id: string;
    image: { url: string };
    description: string;
    hotelname: string;
    foodname: string;
    price: number
}
export default function FoodList() {
    const [food, setFood] = useState<FoodType[]>([]);
    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get("https://foodzo-assessment.onrender.com/food/show", {
                withCredentials: true,
            });
            setFood(res.data.info);
        };
        getdata();
    }, []);
    const ParentVariants = {
        hidden: {
            opacity: 0,
            y: 150
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.5,
                duration: 2
            }
        }
    }
    const childvariant = {
        hidden: {
            opacity: 0,
            y: 150

        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2
            }
        }
    }
    const navigate = useNavigate()

    const handleEdit=(id:string)=>{
        navigate(`/admin/edit/${id}`)
    }

    const handleDelete=async(id:string)=>{
        const res = await axios.delete(`https://foodzo-assessment.onrender.com/food/delete/${id}`)
        toast.success(res.data.message)
    }
return (
        <>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/video/video2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.div className="relative z-10 flex items-center justify-center h-full flex-col" variants={ParentVariants} initial="hidden" animate="show">
                    <motion.h1 className="text-white text-4xl md:text-5xl font-bold mb-5" variants={childvariant}>
                        <i>FoodZo</i>
                    </motion.h1>
                    <motion.p className="text-2xl" variants={childvariant}>
                        Order Your Food Now
                    </motion.p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {food.map((data, i) => (
                    <div
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
                        key={i}>
                        <img
                            src={data.image.url}
                            alt={data.hotelname}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {data.hotelname}
                            </h3>
                            <p className="text-md font-medium text-gray-700">
                                {data.foodname}
                            </p>
                            <p className="text-sm font-semibold text-green-600">
                                ₹{data.price}
                            </p>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {data.description}
                            </p>
                            <div className="flex gap-2 mt-3">
                                <button
                                    className="w-1/2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all" onClick={()=>handleEdit(data._id)}>
                                    Edit
                                </button>
                                <button
                                    className="w-1/2 bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition-all" onClick={()=>handleDelete(data._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}
