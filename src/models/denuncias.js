const connection = require('../config/db')


class Denuncia {
    constructor(data) {
        this.Id_denuncia= data.Id_denuncia;
        this.fill(data);
    }

    fill(data) {
        this.Id_denunciante = data.Id_denunciante;
        this.Id_denunciado = data.Id_denunciado;
        this.Descripcion = data.Descripcion;
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Denuncia`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async findPorDenunciante(id) {
        let queryStr = 'SELECT * FROM `Denuncia` WHERE `Id_denunciante` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Denuncia(rows[0]);
        }
        return;
    }

    static async findPorDenunciado(id) {
        let queryStr = 'SELECT * FROM `Denuncia` WHERE `Id_denunciado` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Denuncia(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_cliente == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Denuncia` WHERE `Id_denuncia` = ?';
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
        let queryStr = 'INSERT INTO `Denuncia` (`Id_denunciante`, `Id_denunciado`, `Descripcion`) VALUES (?, ?, ?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Id_denunciante, this.Id_denunciado, this.Descripcion],
        );
        this.Id_denuncia= result.insertId;
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

module.exports = Denuncia;
