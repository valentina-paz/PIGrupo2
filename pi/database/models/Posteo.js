module.exports= function(sequelize, dataTypes){
    let alias= "Posteo";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        nombreImg: {
            type: dataTypes.STRING
        },
        textoPost: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }
    let config= {
        tableName: "posteos",
        timestamps: true,
        underscored: false
    }
    let Posteo= sequelize.define(alias, cols, config);
    return Posteo;    
}
