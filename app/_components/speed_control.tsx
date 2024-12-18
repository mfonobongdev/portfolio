import cn from "classnames";
import { useSpeedControlStore } from "./speed_control_store";

export default function SpeedControl() {
	const { globalMultiplier, setGlobalMultiplier } = useSpeedControlStore();

	return (
		<div className="flex items-center gap-2">
			{SPEEDS.map(({ label, value }) => (
				<button
					key={label}
					type="button"
					onClick={() => setGlobalMultiplier(value)}
					className={cn("min-w-12 rounded-md border p-0.5 text-xs", {
						"border-blue-600/20 bg-blue-600/10": globalMultiplier === value,
						"border-black/10 bg-black/5": globalMultiplier !== value,
					})}
				>
					<span>{label}</span>
				</button>
			))}
		</div>
	);
}

const SPEEDS = [
	{
		label: "0.25x",
		value: 5,
	},
	{
		label: "0.5x",
		value: 3,
	},
	{
		label: "1x",
		value: 1,
	},
];
