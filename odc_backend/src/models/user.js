import { DataTypes, Sequelize } from "sequelize/types";

const User={
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    password: Sequelize.STRING,
}

export default User