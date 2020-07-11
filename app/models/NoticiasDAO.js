function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback){
    this._connection.query('select * from noticias', callback);
    // Nao implementar Arrow Function. Gera erro nessa sintaxe
};

NoticiasDAO.prototype.getNoticia = function (callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    // console.log(noticia);
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

module.exports = () => {
    
    return NoticiasDAO;

};