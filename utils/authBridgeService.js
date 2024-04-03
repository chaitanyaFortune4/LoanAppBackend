const { pancards } = require("../mockJsonData/pancard");

// const authBridgeSuccess = {
//   msg: {
//     LastUpdate: "",
//     Name: "TestName Test",
//     NameOnTheCard: "Test Name",
//     PanHolderStatusType: "Individual",
//     PanNumber: "CHPPP71323H",
//     STATUS: "Active",
//     StatusDescription: "Existing and Valid",
//     panHolderStatusType: "Individual",
//     source_id: 2,
//   },
//   status: 1,
// };

// const authBridgeFailed = { msg: "Record not found", status: 9 };

const checkAuthBridge = async (panNumber) => {
  const matchedPAN = pancards.find(
    (entry) => entry.pancard_number === panNumber.docNumber
  );

  if (matchedPAN) {
    return {
      status: 1,
      msg: {
        LastUpdate: "",
        name: matchedPAN.name,
        nameOnTheCard: matchedPAN.name,
        panHolderStatusType: matchedPAN.type,
        panNumber: matchedPAN.pancard_number,
        status: matchedPAN.status,
        statusDescription: matchedPAN.statusDescription,
        source_id: 2,
      },
    };
  } else {
    console.log("ARR");
    return { msg: "Record not found", status: 9 };
  }
};

module.exports = {
  checkAuthBridge,
};
