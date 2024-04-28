// nạp thư viện axios
const axios = require('axios');

async function fetchAndPrintLessons() {
    try {
        // Gửi yêu cầu GET đến endpoint /lesson của máy chủ
        const response = await axios.get(`http://localhost:3000/lesson`);

        // Kiểm tra xem yêu cầu có thành công không
        if (response.status === 200) {
            // In ra danh sách lesson
            const lessons = response.data;
            console.log('Danh sách lesson:', lessons);
        } else {
            console.error('Yêu cầu không thành công:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    }
}
async function fetchAndPrintLessonById(id) {
    try {
        // Gửi yêu cầu GET đến endpoint /lesson/id của máy chủ
        const response = await axios.get(`http://localhost:3000/lesson/${id}`);

        // Kiểm tra xem yêu cầu có thành công không
        if (response.status === 200) {
            // In ra lesson có id
            const lesson = response.data;
            console.log('lesson:', lesson);
        } else {
            console.error('Yêu cầu không thành công:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    }
}

// Gọi hàm để lấy và in ra danh sách person
fetchAndPrintLessons();
fetchAndPrintLessonById(1);
// Khởi động máy chủ
var app = require('./config/express');
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server ON in Port ' + port);
});
