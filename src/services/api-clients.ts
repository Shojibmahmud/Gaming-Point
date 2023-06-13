import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "92c3293bf8bb48e1b76c206eb0a2fb2c",
	},
});
