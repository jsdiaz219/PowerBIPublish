const getVentas = (req, res, next) =>{
    res.send('<iframe width="1300" height="660" src="https://app.powerbi.com/view?r=eyJrIjoiZDgzNmUwODQtMzZlNi00NTM1LWE0MDEtMmMyNzdjODIzZTYzIiwidCI6IjA0MTdjY2IwLTk3MDYtNGQ2Mi04NDQ1LWZkZTg4NDIyZmEyYSJ9&pageName=ReportSectione2b45ca009d8e18f309b" frameborder="0" allowFullScreen="true"></iframe>')
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