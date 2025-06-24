const mongoose = require('mongoose');

//Conexão com o banco de dados
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro ao conectar com MongoDB: ${error.message}`);
        process.exit(1); // Sai do processo com falha
    }
};

module.exports = connectDB;