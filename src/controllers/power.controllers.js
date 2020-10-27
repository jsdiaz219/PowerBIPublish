const getVentas = (req, res, next) =>{
    res.send('<iframe width="1900" height="980" src="https://app.powerbi.com/reportEmbed?reportId=725950f5-cc8d-4d98-aa40-79ce9929fbb0&autoAuth=true&ctid=0417ccb0-9706-4d62-8445-fde88422fa2a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>')
}

const postVenta = (req, res, next) => {
    res.send('<iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=b1bd1c51-40dc-46f3-b231-51b22045584d&autoAuth=true&ctid=0417ccb0-9706-4d62-8445-fde88422fa2a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>')
}


module.exports = {
    getVentas,
    postVenta
}