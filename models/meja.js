'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.transaksi, {
        foreignKey: `id_meja`,
        as: `meja`,
      });
    }
  }
  meja.init(
    {
      id_meja: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      nomor_meja: DataTypes.STRING,
      status: DataTypes.ENUM('terisi', 'kosong'),
    },
    {
      sequelize,
      modelName: 'meja',
      tableName: 'meja',
    }
  );
  return meja;
};
