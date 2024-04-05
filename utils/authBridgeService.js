const { pancards } = require("../mockJsonData/pancard");
const { decrypt } = require("./common");

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

const checkAuthBridge = async (pancard_no) => {
  // const panNumber = decrypt(pancard_no);
  const matchedPAN = pancards.find(
    (entry) => entry.pancard_number === pancard_no
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
    return { msg: "Record not found", status: 9 };
  }
};

module.exports = {
  checkAuthBridge,
};
