const generateId = () => {
	let id = "";
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < 10; i++)
		id += possible.charAt(Math.floor(Math.random() * possible.length));

	return id;
};

export default generateId;
