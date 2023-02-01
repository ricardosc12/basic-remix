import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "@/styles/app.css"

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  description: "Remix Project"
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
	return (
		<html lang="en" className="h-full bg-gray-50">
		<head>
			<Meta />
			<Links />
		</head>
		<body className="h-full">
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			{process.env.NODE_ENV === "development" && <LiveReload />}
		</body>
		</html>
	);
}
