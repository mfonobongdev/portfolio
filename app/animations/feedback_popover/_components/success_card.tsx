import { useSpeedControl } from "@/app/_components/use_speed_control";
import { motion } from "motion/react";
import CircledCheckmark from "../_graphics/circled_checkmark";

export default function SuccessCard() {
	const [duration] = useSpeedControl({ value: 0.9 });

	return (
		<motion.div
			className="absolute inset-0 flex h-full flex-col items-center justify-center"
			initial={{ y: -32, opacity: 0, filter: "blur(6px)" }}
			animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
			transition={{ type: "spring", duration, bounce: 0 }}
		>
			<CircledCheckmark />
			<h3>Feedback received!</h3>
			<p>Thanks for helping me improve Sonner.</p>
		</motion.div>
	);
}
