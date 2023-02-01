import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Navbar from "@/components/layouts/Navbar";
import { motion, AnimatePresence } from "framer-motion"

export const loader = async ({request}) => {

	return json({})
};

export default function Index() {

	return (
		<main>
			<Navbar/>
			<div className="p-10">
			<AnimatePresence mode='wait' initial={true}>
				<Outlet/>
			</AnimatePresence>
			</div>
		</main>

	)
}
