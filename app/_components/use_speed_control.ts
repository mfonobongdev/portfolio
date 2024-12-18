import { useEffect, useState } from "react";
import { useSpeedControlStore } from "./speed_control_store";

export const useSpeedControl = ({ value }: { value: number }) => {
	const { globalMultiplier } = useSpeedControlStore();

	const [speed, setSpeed] = useState(() => {
		return value * globalMultiplier || 1;
	});

	useEffect(() => {
		setSpeed(value * globalMultiplier);
	}, [globalMultiplier, value]);

	return [speed];
};
