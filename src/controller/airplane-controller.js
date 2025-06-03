const { StatusCodes } = require("http-status-codes");

const { airplaneService } = require("../services");
const { response } = require("express");
const { error } = require("winston");

async function createAirplane(req, res) {
  try {
    const airplane = await airplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "succesfully created an airplane ",
      data: airplane,     //anged data: response,
       error: error.message || error,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong while creating airplane ",
      data: {},
      error: error,
    });
  }
}

module.exports = { createAirplane }
