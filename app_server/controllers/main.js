const index = (req, res) => {
    res.render('index', { title: 'Book A Teacher' });
};

module.exports = {
    index
};