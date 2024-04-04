const statesData = require("../mockJsonData/states.json");
const citiesData = require("../mockJsonData/cities.json");

const getStateCity = async (req, res) => {
  try {
    const { stateCode } = req.body;

    // If stateCode is provided, filter cities by state
    if (stateCode) {
      const stateCities = citiesData.filter(
        (city) => city.stateCode === stateCode
      );
      return res.status(200).json({
        success: true,
        message: "Cities found",
        cities: stateCities,
      });
    }

    // If no stateCode provided, return all states
    return res.status(200).json({
      success: true,
      message: "States found",
      states: statesData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Get state and city failed",
    });
  }
};

module.exports = {
  getStateCity,
};
