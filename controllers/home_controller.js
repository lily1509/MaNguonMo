const user = {
    name: "Nguyen Van A",
    email: "vana@gmail.com",
  };
  
  class HomeController {
    static index(req, res) {
      res.render('index', { bookings: danhSachDatCho });
    }
  
    static about(req, res) {
      res.render('index', { bookings: danhSachDatCho });

    }
  }
  
  module.exports = HomeController;