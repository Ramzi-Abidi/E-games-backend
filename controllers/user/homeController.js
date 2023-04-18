const homeController = async (req, res) => {
    try {
        res.status(200).json({ msg: "home route" });
    } catch (err) {
        console.log(err);
        res.status(501).json({ msg: err });
    }
};

module.exports = homeController;

