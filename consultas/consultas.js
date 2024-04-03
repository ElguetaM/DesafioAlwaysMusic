import pool from "../config/db.js";

const dato = process.argv.slice(2);
const option = dato[0];
const nombre = dato[1];
let rut = dato[2];
const curso = dato[3];
const nivel = dato[4];

const showUsers = async () => {
  const show = "SELECT * FROM Estudiantes";

  const response = await pool.query(show);
  console.log(response.rows);
};
const addUser = async (nombre, rut, curso, nivel) => {
  const add =
    "INSERT INTO Estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)";
  const values = [nombre, rut, curso, nivel];

  const response = await pool.query(add, values);
  console.log(`Estudiante ${nombre} agregado exitosamente a la base de datos`);
};

const searchUser = async (rut) => {
  const search =
    "SELECT nombre, rut, curso, nivel FROM Estudiantes WHERE rut = $1";
  const values = [rut];

  const response = await pool.query(search, values);
  console.log(`Estudiante encontrado`, response.rows);
};
const updateUser = async (nombre, rut, curso, nivel) => {
  const update =
    "UPDATE Estudiantes SET nombre = $1, rut = $2, curso = $3, Nivel = $4 WHERE RUT = $2";
  const values = [nombre, rut, curso, nivel];

  const response = await pool.query(update, values);
  console.log(`Base de datos actualizada para el estudiante ${nombre}`);
};
const deleteUser = async (rut) => {
  const del = "DELETE FROM Estudiantes WHERE rut = $1";
  const values = [rut];

  const response = await pool.query(del, values);
  console.log(`Estudiante con rut${rut} eliminado de la base de datos`);
};

if (option === "add") {
  addUser(nombre, rut, curso, nivel);
} else if (option === "show") {
  showUsers();
} else if (option === "search") {
  rut = dato[1];
  searchUser(rut);
} else if (option === "update") {
  updateUser(nombre, rut, curso, nivel);
} else if (option === "delete") {
  rut = dato[1];
  deleteUser(rut);
} else {
  console.log("Opción inválida");
}
