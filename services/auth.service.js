const User = require("../models/User");

exports.signupService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

exports.findUserByEmailService = async (email) => {
  return await User.findOne({ email });
};
exports.getUsersService = async (role) => {
  const users = await User.find({ role }).select("-password");
  return users;
};
exports.getUserDetailsByIdService = async (role, id) => {
  const userDetails = await User.find({ role: role, _id: id }).select(
    "-password"
  );
  return userDetails;
};
exports.updateCandidateRoleService = async (id) => {
  const userDetails = await User.updateOne(
    { _id: id },
    { $set: { role: "hiring-manager" } }
  );
  return userDetails;
};
