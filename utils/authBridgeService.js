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

const checkAuthBridge = (panNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const matchedPAN = pancards.find(
        (entry) => entry.msg.PanNumber === panNumber
      );
      if (matchedPAN) {
        resolve({
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
        });
      } else {
        reject({ msg: "Record not found", status: 9 });
      }
    }, 1000);
  });
};

module.exports = {
  checkAuthBridge,
};
