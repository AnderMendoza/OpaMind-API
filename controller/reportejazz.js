'use strict'

var client = require("../database/db");
var db = client.db("pruebasbd");

var controller = {

    JazzReport: function(req, res){
        console.log("______________");
        console.log("ENTRANDO A LA FUNCION REPORT");
        db.collection("jazzs").aggregate([
            {$group:{_id: "$banda", count:{$sum:1}}}
        ]).toArray(
            (error, dataJazzs) => {
                if(error || !dataJazzs){
                    return res.status(404).send({
                        message: "No se encontraron jazz"
                    });
                }else{
                    return res.status(200).send({
                        status:"success",
                        JazzReport: dataJazzs
                    });
                }
            }
        );
    }

}


module.exports = controller;