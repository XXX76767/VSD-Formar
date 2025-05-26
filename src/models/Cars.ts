import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Cars extends Model {
    public id!: number;
    public brand!: string;
    public model!: string;
    public year!: number;
    public plate!: string;
    public chassis!: string;

}

Cars.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    plate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    chassis: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
});

export default Cars
