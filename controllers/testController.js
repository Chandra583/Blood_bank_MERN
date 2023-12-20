// const testController = (req, res) => {
//   res.status(200).send({
//     message: "Test controller is working",
//     success: true,
//   });
// };

// module.export = { testController };

const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome user",
      success: true,
    });
  };

  module.exports = { testController };
