const QuadRide = require("../models/quadRide.models");
const ValidateQuadRide = require("../validation/QuadRide");
const CreateQuadRide = async (req, res) => {
  const { errors, isValid } = ValidateQuadRide(req.body);

  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const ride = await QuadRide.findOne({ title: req.body.title });

      if (!ride) {
        const newQuadRide = new QuadRide({ ...req.body });
        await newQuadRide.save();
        res.status(200).json(newQuadRide);
      } else {
        res.status(400).json({ message: "Une balade avec ce titre existe déjà." });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};

const GetQuadRides = async (req, res) => {
  try {
    const quadRides = await QuadRide.find();
    res.status(200).json({
      success: true,
      data: quadRides,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuadRideByName = async (req, res) => {
  try {
    const quadRide = await QuadRide.findOne({ title: req.params });
    if (!quadRide) {
      return res.status(404).json({
        success: false,
        message: "Balade non trouvée",
      });
    }
    res.status(200).json({
      success: true,
      data: quadRide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateQuadRide = async (req, res) => {
  try {
    const quadRide = await QuadRide.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quadRide) {
      return res.status(404).json({
        success: false,
        message: "Balade non trouvée",
      });
    }
    res.status(200).json({
      success: true,
      data: quadRide,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteQuadRide = async (req, res) => {
  try {
    const quadRide = await QuadRide.findByIdAndDelete(req.params.id);
    if (!quadRide) {
      return res.status(404).json({
        success: false,
        message: "Balade non trouvée",
      });
    }
    res.status(200).json({
      success: true,
      message: "Balade supprimée avec succès",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  CreateQuadRide,
  GetQuadRides,
  getQuadRideByName,
  updateQuadRide,
  deleteQuadRide,
};
