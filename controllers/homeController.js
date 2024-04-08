const homeController = (req, res) => {
    const data = {
        'name': 'jaydip saraviya',
        'id':'11',
        'marks': [10, 20, 30, 40, 50]
    }
    res.render('index', data)
}

export { homeController }