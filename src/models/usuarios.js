const connection = require('../config/db')


class Usuario {
    constructor(data) {
        this.Id_usuario = data.Id_usuario;
        this.fill(data);
    }

    fill(data) {
        this.Nombre_usuario= data?.Nombre_usuario;
        this.Apellido= data?.Apellido;
        this.Nombre = data?.Nombre;
        this.Pass_usuario = data?.Pass_usuario;
        this.Email = data?.Email;
        this.Tel = data?.Tel;
        this.Ruta_foto = data?.Ruta_foto;
        this.Dni = data?.Dni;
        this.Calle = data?.Calle;
        this.Numeral = data?.Numeral;
        this.Cp = data?.Cp;
        this.Provincia = data?.Provincia;
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Usuario`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Usuario` WHERE `Id_usuario` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Usuario(rows[0]);
        }
        return;
    }
    
    static async findPorProvincia(unaProvincia) {
        let queryStr = 'SELECT * FROM `Usuario` WHERE `Provincia` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [unaProvincia],
        );
        if (rows.length > 0) {
            return new Usuario(rows[0]);
        }
        return;
    }
    



    async delete() {
        if (this.Id_cliente == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Usuario` WHERE `Id_usuario` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_usuario],
            );
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
    }

    // async save() {
    //     if (this.Id_servicio == undefined || this.Id_servicio == 0) {
    //         return this.create();
    //     } else {
    //         let queryStr = 'UPDATE `Servicio` SET `Tel_alter` = ? WHERE `Id_oferente` = ?';
    //         let result, fields;
    //         [result, fields] = await connection.query(
    //             queryStr,
    //             [this.Tipo, this.Id_servicio],
    //         );
    //         this.Id_servicio = result.insertId;
    //         return this;
    //     }
    // }

    async create() {
        let queryStr = 'INSERT INTO `Usuario` (`Nombre_usuario`, `Pass_usuario`, `Email`, `Tel`, `Ruta_foto`, `Dni`, `Apellido`, `Nombre`, `Calle`, `Numeral`, `Cp`, `Provincia`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Nombre_usuario, this.Pass_usuario, this.Email, this.Tel, this.Ruta_foto, this.Dni, this.Apellido, this.Nombre, this.Calle, this.Numeral, this.Provincia],
        );
        this.Id_usuario = result.insertId;
        return this;
    }

    // static async createStatic(user) {
    //     let queryStr = 'INSERT INTO `servicio` (`email`, `password`) VALUES (?,?)';
    //     let result, fields;
    //     [result, fields] = await connection.query(
    //         queryStr,
    //         [user.email, user.password],
    //     );
    //     user.id = result.insertId;
    //     return user;
    // }
}

module.exports = Usuario;
