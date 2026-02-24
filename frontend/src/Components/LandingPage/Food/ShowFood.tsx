import axios from "axios";
import { useEffect, useState } from "react";
import Topbar from "../Topbar";
import { motion} from "motion/react"
import toast from "react-hot-toast";

interface FoodType {
  image: { url: string };
  description: string;
  hotelname:string;
  foodname:string;
  price:number
}

export default function ShowFood() {
  const [food, setFood] = useState<FoodType[]>([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
  const getdata = async () => {
    try {
      const res = await axios.get(
        "https://foodzo-assessment.onrender.com/food/show",
        { withCredentials: true }
      );
      setFood(res.data.info);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); 
    }
  };

  getdata();
}, []);

     const ParentVariants = {
        hidden:{
            opacity:0,
            y:150

        },
        show:{
        opacity:1,
        y:0,
        transition:{
            staggerChildren:0.5,
            duration:2
        }
        }
    }
    const childvariant={
         hidden:{
            opacity:0,
            y:150

        },
         show:{
        opacity:1,
        y:0,
        transition:{
            duration:2
        }
         }
    }
    const handlebtn = async()=>{
      try{
    const res  = await axios.get("https://foodzo-assessment.onrender.com/food/order",{withCredentials:true})
      toast.success(res.data.message)
      }
      catch(err:any){
        toast.error(err.response.data.message);
      }
     
    }

  return (
    <>
 <Topbar/>
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
               
                <motion.p className="text-2xl text-white" variants={childvariant}>
                    Order Your Food Now
                </motion.p>
                 
            </motion.div>

        </div>
     
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {loading ? (
    <div className="col-span-full flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-solid"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading food items...</p>
    </div>
  ) : (
    food.map((data, i) => (
      <div
        className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
        key={i}
      >
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
          <button
            className="mt-3 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-all"
            onClick={handlebtn}
          >
            Order Now
          </button>
        </div>
      </div>
    ))
  )}
</div>
    </>
   
  );
}
