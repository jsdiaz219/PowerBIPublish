const getVentas = (req, res, next) =>{
    res.send('<iframe width="1900" height="980" src="https://app.powerbi.com/reportEmbed?reportId=725950f5-cc8d-4d98-aa40-79ce9929fbb0&autoAuth=true&ctid=0417ccb0-9706-4d62-8445-fde88422fa2a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>')
}


module.exports = {
    getVentas
}