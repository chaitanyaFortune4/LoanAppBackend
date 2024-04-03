const leadNumberGenerator = () => {
  return "LOAN" + Math.floor(100000 + Math.random() * 900000);
};

const leadUserGenerator = async (connection, body) => {
  // const intitialResult = await connection.query(
  //   "INSERT INTO user_details SET ?",
  //   req.body
  // );

  // let initia_lead = leadNumberGenerator();
  // let initialLeadBody = {
  //   lead_no: initia_lead,
  //   lead_status: "Enquiry",
  //   user_id: intitialResult[0].insertId,
  // };
  // await connection.query("INSERT INTO loan_lead SET ?", initialLeadBody);

  const result = await connection.query("INSERT INTO user_details SET ?", body);

  let initia_lead = leadNumberGenerator();
  let initialLeadBody = {
    lead_no: initia_lead,
    lead_status: "Enquiry",
    user_id: result[0].insertId,
  };
  await connection.query("INSERT INTO loan_lead SET ?", initialLeadBody);
};

module.exports = {
  leadNumberGenerator,
  leadUserGenerator,
};
