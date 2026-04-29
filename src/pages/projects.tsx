import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation("projects");
	return (
		<>
			{t("projects")}
		</>
	);
}

export default Projects;