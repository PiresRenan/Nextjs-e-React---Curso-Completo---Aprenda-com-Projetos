/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {

    if(req.method === 'GET'){
        res.status(200).json({
            nome: "Teste GET"
        })
    }else {
        res.status(200).json({
            nome: "Teste outros"
        })
    }
}