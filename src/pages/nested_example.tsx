import { useTranslation } from "react-i18next";

const NestedExample = () => {
	const { t } = useTranslation("nestedexample");
	return (
		<>
			{t("nestedexample")}
		</>
	);
}

export default NestedExample;