import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import App from "./App";
import Customized_Theme from "./Theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={Customized_Theme}>
			<ColorModeScript
				initialColorMode={theme.config.initialColorMode}></ColorModeScript>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
