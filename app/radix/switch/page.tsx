import * as Switch from "@radix-ui/react-switch";

export default function SwitchPage() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex items-center space-x-4">
				<label htmlFor="airplane-mode" className="text-gray-600 text-sm">
					Airplane Mode
				</label>
				<Switch.Root
					id="airplane-mode"
					className="w-11 rounded-full bg-gray-200 p-px shadow-inner shadow-sky-700/20 transition duration-500 data-[state=checked]:bg-sky-200"
				>
					<Switch.Thumb className="block h-6 w-6 rounded-full bg-black/50 shadow-sm transition duration-300 data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-sky-400" />
				</Switch.Root>
			</div>
		</div>
	);
}
