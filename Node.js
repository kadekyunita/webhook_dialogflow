const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const jadwal = {
  "10": {
    "senin": "Matematika, Bahasa Indonesia, Fisika",
    "selasa": "Biologi, Sejarah, Bahasa Inggris"
  },
  "11": {
    "senin": "Kimia, Matematika, Ekonomi",
    "selasa": "Geografi, Bahasa Indonesia"
  }
};

app.post("/webhook", (req, res) => {
  const kelas = req.body.queryResult.parameters.kelas;
  const hari = req.body.queryResult.parameters.hari;

  let responseText = "Maaf jadwal tidak ditemukan.";

  if (jadwal[kelas] && jadwal[kelas][hari]) {
    responseText = `Jadwal kelas ${kelas} hari ${hari} adalah ${jadwal[kelas][hari]}`;
  }

  res.json({
    fulfillmentText: responseText
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server berjalan di port " + PORT);
});
