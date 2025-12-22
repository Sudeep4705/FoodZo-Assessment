import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Topbar.css"
import { motion } from "motion/react"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Navbar() {
	const [isloggedIn, setisloggedIn] = useState(false)

	useEffect(() => {
		const getdata = async () => {
			const res = await axios.get("https://foodzo-assessment.onrender.com/user/verify", { withCredentials: true })
			setisloggedIn(res.data.isloggedIn)
		}
		getdata()
	}, [])

	const handlelogout = async () => {
		const res = await axios.post("https://foodzo-assessment.onrender.com/user/logout", {}, { withCredentials: true })
		setisloggedIn(res.data.isloggedIn)
	}
	return (
		<>
			<motion.div className="navbar rounded-lg" initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
				<div className="navbar-start ">
					<a className="navbar-item text-white" href='/'>FoodZo</a>
				</div>
				<div className="navbar-center">
					<a className="navbar-item text-white" href='/support'>Contact</a>
				</div>
				<div className="navbar-end">
					<div className="avatar avatar-ring avatar-md">
						<div className="dropdown-container">
							<div className="dropdown">
								<label className=" flex cursor-pointer px-0" tabIndex={0}>
									<AccountCircleIcon />
								</label>
								<div className="dropdown-menu dropdown-menu-bottom-left">
									{!isloggedIn && (
										<>
											<Link className="dropdown-item text-sm" to="/signup">
												SignUp
											</Link>

											<Link tabIndex={-1} className="dropdown-item text-sm" to="/login">
												SignIn
											</Link>

										</>
									)}
									{isloggedIn && (
										<button
											tabIndex={-1}
											className="dropdown-item text-sm"
											onClick={handlelogout}
										>
											Logout
										</button>

									)}


								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}