const events = require("events");
const url = require("url");

class DB extends events.EventEmitter {
  constructor() {
    super();
    this.data = [{
        id: 1,
        name: "Kirill",
        bday: "2002-08-23"
      },
      {
        id: 2,
        name: "Nikita",
        bday: "2004-05-11"
      },
      {
        id: 3,
        name: "Ivan",
        bday: "1999-03-01"
      },
    ];
  }

  async select() {
    return await new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

  async insert(obj) {
    return await new Promise((resolve, reject) => {
      this.data.push(obj);
      resolve("Success");
    });
  }

  async update(obj) {
    return await new Promise((resolve, reject) => {
      for (let s of this.data) {
        if (s.id == obj.id) {
          s.name = obj.name;
          s.bday = obj.bday;
          resolve({
            status: "Succes"
          });
        }
      }
      resolve({
        status: "Failed"
      });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      let delObj = {
        status: "failed"
      };
      this.data.forEach((value, index) => {
        if (value.id == id) {
          delObj = JSON.parse(JSON.stringify(value));
          this.data.splice(index, 1);
        }
      });
      resolve(delObj);
    });
  }
}

const db = new DB();

db.on("GET", (req, res) => {
  db.select().then((data) => {
    console.log("GET");
    res.end(JSON.stringify(data));
  });
});

db.on("POST", (req, res) => {
  req.on("data", (data) => {
    const obj = JSON.parse(data);
    db.insert(obj).then((result) => {
      console.log("POST", result);
      res.end(JSON.stringify(obj));
    });
  });
});

db.on("PUT", (req, res) => {
  req.on("data", (data) => {
    const obj = JSON.parse(data);
    db.update(obj).then((result) => {
      console.log("PUT", result);
      res.end(JSON.stringify(result));
    });
  });
});

db.on("DELETE", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  if (id != "undefined") {
    db.delete(id).then((result) => {
      console.log("DELETE", result);
      res.end(JSON.stringify(result));
    });
  }
});

exports.db = db;
