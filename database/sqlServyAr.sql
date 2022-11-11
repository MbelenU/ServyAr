/*   SCRIPT SQL  - Tablas -   */

CREATE TABLE DATOS_PERSONALES
       (
       DNI BIGINT NOT NULL,                              
       APELLIDO BIGINT NOT NULL,                              
       NOMBRE BIGINT NOT NULL,                              
       PROVINCIA BIGINT NOT NULL,                              
       CALLE BIGINT NOT NULL,                              
       NUMERAL BIGINT NOT NULL,                              
       LOCALIDAD BIGINT NOT NULL,                              
       CP BIGINT NOT NULL                              
       );



CREATE TABLE CATALOGO_CABECERA
       (
       ID_CATALOGO BIGINT NOT NULL,                              
       FECHA_APERTURA BIGINT NOT NULL                              
       );



CREATE TABLE USUARIO
       (
       ID_USUARIO BIGINT NOT NULL,                              
       DNI BIGINT NOT NULL,                              
       NOMBRE_USUARIO BIGINT NOT NULL,                              
       CONTRASEÑA BIGINT NOT NULL,                              
       EMAIL BIGINT NOT NULL,                              
       TEL BIGINT NOT NULL,                              
       RUTA_FOTO_PERFIL BIGINT NOT NULL                              
       );



CREATE TABLE OFERENTE
       (
       ID_USUARIO BIGINT NOT NULL,                              
       ID_OFERENTE BIGINT NOT NULL,                              
       TEL_ALTERNATIVO BIGINT NOT NULL                              
       );



CREATE TABLE CLIENTE
       (
       ID_USUARIO BIGINT NOT NULL,                              
       ID_CLIENTE BIGINT NOT NULL                              
       );



CREATE TABLE SERVICIO
       (
       ID_SERVICIO BIGINT NOT NULL,                              
       ID_CATALOGO BIGINT NOT NULL,                              
       RUBRO BIGINT NOT NULL                              
       );



CREATE TABLE CATALOGO_DETALLE
       (
       ID_DETALLE BIGINT NOT NULL,                              
       ID_CATALOGO BIGINT NOT NULL,                              
       FECHA_DE_REALIZACION BIGINT NOT NULL,                              
       DESCRIPCION BIGINT NOT NULL                              
       );



CREATE TABLE ESTADO_PROPUESTA
       (
       ID_ESTADO BIGINT NOT NULL,                              
       ID_USUARIO BIGINT NOT NULL,                              
       TIPO BIGINT NOT NULL,                              
       PUNTAJE BIGINT NOT NULL,                              
       FECHA BIGINT NOT NULL                              
       );



CREATE TABLE PROPUESTA
       (
       ID_PROPUESTA BIGINT NOT NULL,                              
       ID_USUARIO BIGINT NOT NULL,                              
       ID_USUARIO_1 BIGINT NOT NULL,                              
       ID_ESTADO BIGINT NOT NULL,                              
       FECHA_INICIO BIGINT NOT NULL,                              
       FECHA_FINALIZACION BIGINT NOT NULL,                              
       MONTO_A_ABONAR BIGINT NOT NULL                              
       );



CREATE TABLE MENSAJE
       (
       ID_MENSAJE BIGINT NOT NULL,                              
       ID_USUARIO BIGINT NOT NULL,                              
       ID_USUARIO_1 BIGINT NOT NULL,                              
       DESCRIPCION BIGINT NOT NULL                              
       );



CREATE TABLE SERVICIO_OFRECIDO
       (
       FECHA_DE_INICIO_ACTIVIDAD BIGINT NOT NULL,                              
       ID_SERVICIO BIGINT NOT NULL,                              
       ID_USUARIO BIGINT NOT NULL                              
       );



CREATE TABLE DENUNCIA
       (
       ID_DENUNCIA BIGINT NOT NULL,                              
       ID_USUARIO BIGINT NOT NULL,                              
       ID_USUARIO_1 BIGINT NOT NULL,                              
       FECHA BIGINT NOT NULL                              
       );



