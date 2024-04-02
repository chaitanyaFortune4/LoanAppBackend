const { pancards } = require("../mockJsonData/pancard");

const creditScore = async (req, res) => {
    try {
        let data = pancards.find(item => item.pancard_number === req.body.pancard_no)
        if (data.status === 1) {
            res.status(200).json({
                success: true,
                data
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Invalid Pancard number",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
};

module.exports = {
    creditScore
}