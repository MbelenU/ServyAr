const connection = require('../config/db')


class Estado {
    constructor(data) {
        this.Id_estado = data.Id_estado;
        this.fill(data);
    }

    fill(data) {
        this.Tipo = data?.Tipo;
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Estado`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Estado` WHERE `Id_estado` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Estado(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_estado == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Estado` WHERE `Id_estado` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_estado],
            );
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
    }

    async save() {
        if (this.Id_estado== undefined || this.Id_estado == 0) {
            return this.create();
        } else {
            let queryStr = 'UPDATE `Estado` SET `Tipo` = ? WHERE `Id_estado` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Tipo, this.Id_estado],
            );
            this.Id_estado = result.insertId;
            return this;
        }
    }

    async create() {
        let queryStr = 'INSERT INTO `Estado` (`Tipo`) VALUES (?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Tipo],
        );
        this.Id_estado = result.insertId;
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

module.exports = Estado;
