const connection = require('../config/db')


class Cliente {
    constructor(data) {
        this.Id_cliente_cliente = data.Id_cliente;
        this.fill(data);
    }

    fill(data) {
        this.Id_usuario_client = data?.Id_usuario_client;
        
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Cliente`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Cliente` WHERE `Id_Cliente` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Cliente(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_cliente == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Cliente` WHERE `Id_cliente` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_cliente],
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
        let queryStr = 'INSERT INTO `Cliente` (`Id_usuario_client`) VALUES (?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Id_usuario_client],
        );
        this.Id_cliente = result.insertId;
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

module.exports = Cliente;
