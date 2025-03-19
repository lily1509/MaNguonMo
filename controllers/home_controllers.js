const Booking = require("../models/booking");

exports.getHome = (req, res) => {
  res.render("index", { bookings: Booking.getAll() });
};

exports.addBooking = (req, res) => {
  const { customerName, date, time } = req.body;
  
  if (!customerName || !date || !time) {
    return res.send("Vui lòng nhập đầy đủ thông tin.");
  }

  const exists = Booking.getAll().some(b => b.date === date && b.time === time);
  if (exists) {
    return res.send("Lịch đã tồn tại vào thời gian này.");
  }

  const newBooking = { id: Date.now(), customerName, date, time, status: "Pending" };
  Booking.addBooking(newBooking);
  res.redirect("/");
};

exports.cancelBooking = (req, res) => {
  Booking.cancelBooking(parseInt(req.params.id));
  res.redirect("/");
};
