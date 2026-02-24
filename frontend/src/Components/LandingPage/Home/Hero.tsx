import { motion} from "motion/react"
import Main from "./Main";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate()
    const handleclick = ()=>{
        navigate("/show")
    }
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
    return (
        <>
         <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
            <motion.div className="relative z-10 flex items-center justify-center h-full flex-col" variants={ParentVariants} initial="hidden" animate="show">
                <motion.h1 className="text-white text-4xl md:text-5xl font-bold mb-5" variants={childvariant}>
                    <i>FoodZo</i>
                </motion.h1>
               
                <motion.p className="text-2xl text-white" variants={childvariant}>
                    Experience fast & easy online ordering
                    on the FoodZo
                </motion.p>
                 <motion.button className="p-3 rounded-3xl w-30 bg-white text-black mt-20" variants={childvariant} whileTap={{scale:1.2}} onClick={handleclick}>
                    Order Now
                </motion.button>
            </motion.div>

        </div>
        <Main/>
      
        </>
       
    );
}
