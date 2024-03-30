const creditScore = async (req, res) => {
  const { pancard_no } = req.body;

  const filteredData = pancards.find((item) => item.pancard_no === pancard_no);

  return res
    .status(200)
    .json({
      success: true,
      message: "Credit score fetched successfuly",
      filteredData,
    });
};

module.exports = {
  creditScore,
};
