interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div className="flex flex-col items-center justify-center flex-grow w-full text-center">
			{children}
		</div>
	);
};

export default Wrapper;
