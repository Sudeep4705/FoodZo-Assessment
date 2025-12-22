import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface SupportType {
  _id: string,
  name: string;
  email: string;
  message: string;
}

export default function Support() {
  const [data, setData] = useState<SupportType[]>([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("https://foodzo-assessment.onrender.com/admin/support", {
          withCredentials: true,
        });
        setData(res.data.info);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);

  const handleDelete=async(id:any)=>{
    const res = await axios.delete(`https://foodzo-assessment.onrender.com/admin/support/delete/${id}`)
    toast.success(res.data.message)
  }

  return (
   <div className="p-6 mt-20">
  <h1 className="text-3xl font-semibold mb-8 text-center text-neutral-900">
    Contact Messages
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {data.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-md p-4 rounded-lg border flex flex-col"
      >
        <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>

        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {item.email}
        </p>

        <p className="text-gray-700 mt-2 flex-1">
          <span className="font-semibold">Message:</span> {item.message}
        </p>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(item._id)}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
</div>

  );
}
