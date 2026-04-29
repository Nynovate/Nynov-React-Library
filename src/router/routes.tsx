import Layout from "../layout/layout";
import Home from "../pages/home";
import NestedExample from "../pages/nested_example";
import Projects from "../pages/projects";

export const routes = [
	{
		path: "/:lng",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "projects",
				children: [
					{ index: true, element: <Projects /> },
					{ path: "nested-example", element: <NestedExample /> }
				]
			}
		]
	}
]