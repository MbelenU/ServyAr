const connection = require('../config/db')


class Propuesta {
    constructor(data) {
        this.Id_propuesta = data.Id_propuesta;
        this.fill(data);
    }

    fill(data) {
        this.Id_oferente_p = data?.Id_oferente_p;
        this.Id_cliente_p = data?.Id_cliente_p;
        this.Fecha_inicio = data?.Fecha_inicio;
        this.Fecha_fin = data?.Fecha_fin;
        this.Monto_a_abonar = data?.Monto_a_abonar;
        this.Puntaje = data?.Puntaje;        
    }

    static async getAll() {
        let queryStr = 'SELECT * FROM `Propuesta`';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [],
        );
        return rows;
    }

    static async findPorCliente(id) {
        let queryStr = 'SELECT * FROM `Propuesta` WHERE `Id_cliente_p` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Propuesta(rows[0]);
        }
        return;
    }

    
    static async findPorOferente(id) {
        let queryStr = 'SELECT * FROM `Propuesta` WHERE `Id_oferente_p` = ?';
        let rows, fields;
        [rows, fields] = await connection.query(
            queryStr,
            [id],
        );
        if (rows.length > 0) {
            return new Propuesta(rows[0]);
        }
        return;
    }

    async delete() {
        if (this.Id_propuesta == 0) {
            return false;
        } else {
            let queryStr = 'DELETE FROM `Propuesta` WHERE `Id_propuesta` = ?';
            let result, fields;
            [result, fields] = await connection.query(
                queryStr,
                [this.Id_propuesta],
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
        let queryStr = 'INSERT INTO `Propuesta` (`Id_oferente_p`,`Id_cliente_p`,`Fecha_inicio`, `Fecha_fin`, `Monto_a_abonar`) VALUES (?, ?, ?, ?, ?)';
        let result, fields;
        [result, fields] = await connection.query(
            queryStr,
            [this.Id_oferente_p, this.Id_cliente_p, this.Fecha_inicio, this.Fecha_fin, this.Monto_a_abonar],
        );
        this.Id_propuesta= result.insertId;
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

module.exports = Propuesta;
