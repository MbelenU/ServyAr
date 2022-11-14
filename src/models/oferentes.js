const connection = require('../config/db')


class Oferente {
    constructor(data) {
        this.Id_oferente = data.Id_oferente;
        this.fill(data);
    }

    fill(data) {
        this.Id_usuario_ofer = data?.Id_usuario_ofer;
        this.Tel_alter = data?.Tel_alter;
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Oferente`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async find(id) {
        let queryStr = 'SELECT * FROM `Oferente` WHERE `Id_oferente` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Oferente(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_oferente == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Oferente` WHERE `Id_oferente` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_oferente],
            );
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
    }

    async save() {
        if (this.Id_oferente == undefined || this.Id_oferente == 0) {
            return this.create();
        } else {
            let queryStr = 'UPDATE `Oferente` SET `Tel_alter` = ? WHERE `Id_oferente` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Tel_alter, this.Id_oferente],
            );
            this.Id_oferente = result.insertId;
            return this;
        }
    }

    async create() {
        let queryStr = 'INSERT INTO `Oferente` (`Id_usuario_ofer`, `Tel_alter`) VALUES (?, ?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Id_usuario_ofer, this.Tel_alter],
        );
        this.Id_oferente = result.insertId;
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

module.exports = Oferente;
