let bookings = [
    { id: 1, customerName: "Nguyen Van A", date: "2025-03-20", time: "10:00", status: "Pending" }
  ];
  
  module.exports = {
    getAll: () => bookings,
    addBooking: (booking) => bookings.push(booking),
    updateBooking: (id, updatedBooking) => {
      bookings = bookings.map((b) => (b.id === id ? { ...b, ...updatedBooking } : b));
    },
    cancelBooking: (id) => {
      bookings = bookings.map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b));
    }
  };
  