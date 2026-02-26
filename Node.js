const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const jadwal = {
  "senin": {
    "08-30="bahasa bali,"
    "08-50="ipas"
    "09-30="bahasa indonesia,"
  },
  "selasa": {
    "06-45:"pjok,"
    "09-30:"dda,"
    "14-20="matematika,"
  },
"rabu": {
    "07-30="ppkn,"
    "o8-50="matematika,"
    "10-40="seni budaya,"
    "12-00="sejarah,"
    "14-20="bk,"
    "15-20="bahasa indonesia,"
},
"kamis": {
    "07-30="kka,"
    "08-50="dda,"
    "13-40="agama hindu,"
},
"jumat": {
    "07-30="informatika,"
    "11-20="bahasa inggris,"
      

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
