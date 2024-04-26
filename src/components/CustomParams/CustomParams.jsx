import { useParams } from "react-router-dom";

const CustomParams = () => {
	const { uid } = useParams();

	return <div className="p-4">CustomParams: {uid}</div>;
};

export default CustomParams;
