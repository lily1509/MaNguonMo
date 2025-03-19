const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controllers");

router.get("/", homeController.getHome);
router.post("/add", homeController.addBooking);
router.post("/cancel/:id", homeController.cancelBooking);

let bookings = [
    { id: "1", customerName: "Nguyễn Văn A", date: "2025-03-20", time: "10:00", status: "Pending" }
];

// Hiển thị trang sửa đặt chỗ
router.get('/edit/:id', (req, res) => {
    const booking = bookings.find(b => b.id === req.params.id);
    if (!booking) {
        return res.status(404).send("Không tìm thấy lịch đặt chỗ.");
    }
    res.render('edit', { booking });
});

// Xử lý cập nhật đặt chỗ
router.post('/update/:id', (req, res) => {
    const { customerName, date, time } = req.body;
    let booking = bookings.find(b => b.id === req.params.id);
    
    if (!booking) {
        return res.status(404).send("Không tìm thấy lịch đặt chỗ.");
    }

    // Cập nhật thông tin đặt chỗ
    booking.customerName = customerName;
    booking.date = date;
    booking.time = time;

    console.log("Cập nhật thành công:", booking); // Debug xem có cập nhật hay không
    res.redirect('/'); // Quay về trang danh sách
});
module.exports = router;
