require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const panelMemberRoutes = require("./routes/panelMemberRoutes");
const studentRoutes = require("./routes/studentRoutes");
const tuitionMasterRoutes = require("./routes/tuitionMasterRoutes");
const staffRoute = require("./routes/staffRoutes");
const sampleRoute = require("./routes/sampleRoutes");
const examCreatorRoutes = require("./routes/examCreatorRoutes");

const examRoutes = require("./routes/examRoutes");
const commonRoute = require("./routes/common");
const { Socket } = require("socket.io");

const Document = require("./models/Document");

const app = express();
app.use(cors());
//middleware
app.use(express.json());
//middleware
app.use((req, res, next) => {
	console.log(req.path, res.method);
	next();
});

// routes
app.use("/api/users", userRoutes);


app.use("/api/staff", staffRoute);
app.use("/api/panel_member", panelMemberRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/tuition_master", tuitionMasterRoutes);

app.use("/api/exam_creator", examCreatorRoutes);

//sample

app.use("/api/sample", sampleRoute);
app.use("/api/common", commonRoute);

const http = require("http");
const server = http.createServer(app);

// const io = require("socket.io")(httpServer.createServer(app), {
// 	cors: {
// 		origin: "http://localhost:3000/textEditor/documents/221d31c8-3ae1-44e9-9649-495f94bf78ac",
// 		methods: ["GET", "POST"],
// 	},
// });
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		server.listen(process.env.PORT, () => {
			console.log(
				`DB is connected.Server is working on PORT`,
				process.env.PORT
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});
const defaultValue = "";
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});
io.on("connection", (socket) => {
	socket.on("get-document", async (documentId) => {
		const document = await findOrCreateDocument(documentId);
		socket.join(documentId);
		console.log(document);
		socket.emit("load-document", document);
		// document.queExplanation,
		// 	document.ansExplanation,
		// 	document.questionNumber,
		// 	document.lesson,
		// 	document.answer,
		// socket.on("send-changes", (delta) => {
		// 	socket.broadcast.to(documentId).emit("receive-changes", delta);
		// });
		socket.on(
			"save-document",
			async ([content, content2, questionNumber, lesson, answer]) => {
				console.log(content, content2, questionNumber, lesson, answer);
				await Document.findByIdAndUpdate(documentId, {
					queExplanation: content,
					ansExplanation: content2,
					questionNumber: questionNumber,
					lesson: lesson,
					answer: answer,
				});
			}
		);
	});

	console.log("user connected");
});

async function findOrCreateDocument(id) {
	if (id == null) return;

	const document = await Document.findById(id);
	if (document) return document;
	return await Document.create({
		_id: id,
		queExplanation: defaultValue,
		ansExplanation: defaultValue,
		questionNumber: 0,
		answer: defaultValue,
		lesson: defaultValue,
	});
}
