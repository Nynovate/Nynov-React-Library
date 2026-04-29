import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation("home");
	return (
		<>
			{t("hero")}
		</>
	);
}

export default Home;