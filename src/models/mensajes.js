const connection = require('../config/db')


class Mensaje {
    constructor(data) {
        this.Id_mensaje = data.Id_mensaje;
        this.fill(data);
    }

    fill(data) {
        this.Id_origen= data?.Id_origen;
        this.Id_destino = data?.Id_destino;
        this.Descripcion = data?.Descripcion;
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Mensaje`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Mensaje` WHERE `Id_mensaje` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Mensaje(rows[0]);
        }
        return;
    }

    static async findPorOrigen(id) {
        let queryStr = 'SELECT * FROM `Mensaje` WHERE `Id_origen` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Mensaje(rows[0]);
        }
        return;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Mensaje` WHERE `Id_destino` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Mensaje(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_cliente == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Mensaje` WHERE `Id_mensaje` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_mensaje],
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
        let queryStr = 'INSERT INTO `Mensaje` (`Id_origen`, `Id_destino`, `Descriocion`) VALUES (?, ?, ?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Id_destino, this.Id_destino, this.Descripcion],
        );
        this.Id_mensaje = result.insertId;
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

module.exports = Mensaje;
