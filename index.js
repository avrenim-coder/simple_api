const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).json({
		resHeader: 200,
		resMessage: 'API Okay'
	});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App Running on port: ${PORT}`));