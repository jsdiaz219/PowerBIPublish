const getVentas = (req, res, next) =>{
    res.send('<iframe width="1300" height="660" src="https://app.powerbi.com/reportEmbed?reportId=725950f5-cc8d-4d98-aa40-79ce9929fbb0&autoAuth=true&ctid=0417ccb0-9706-4d62-8445-fde88422fa2a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>')
}

const postVenta = (req, res, next) => {
    res.send('<iframe width="1300" height="660" src="https://app.powerbi.com/view?r=eyJrIjoiYWI0MDI0NzktNzI1ZS00NTUyLTk1NzMtYTQzMjg2M2VlODY4IiwidCI6IjA0MTdjY2IwLTk3MDYtNGQ2Mi04NDQ1LWZkZTg4NDIyZmEyYSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>')
}

const homePage = (req, res, next) => {
    res.send(view)
}

const view ='<div><form method="get" action="/ventas"><button type="submit">Ventas</form></div>'+
            '<div><form method="get" action="/postventa"><button type="submit">Postventas</form></div>'

module.exports = {
    getVentas,
    postVenta,
    homePage
}