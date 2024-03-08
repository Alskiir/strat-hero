interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div className="flex flex-col flex-grow items-center justify-center w-full text-center">
			{children}
		</div>
	);
};

export default Wrapper;
