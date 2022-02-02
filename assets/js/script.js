// lấy ra tất cả selector có class là js-buy-tickets
const buyTickets = document.querySelectorAll('.js-buy-tickets');

// lắng nghe hành vi click trên nút
// tạo một biến mới tên là buyTicket trong mảng buyTickets
// vào biến mới này được lưu lần lượt các nút buy-ticket ở trên
for (const buyTicket of buyTickets) {
    buyTicket.addEventListener('click', showModalBuyTicket);
}

// lấy thẻ modal
const modal = document.querySelector('.js-modal');

// lấy modal container
const modalContainer = document.querySelector('.js-modal-container');

// Lấy nút close
const closebtn = document.querySelector('.js-modal-close');

// hàm lắng nghe sự kiện
closebtn.addEventListener('click', closeModalBuyTicket);

// đóng modal khi nhấn vô vùng đen
modal.addEventListener('click', closeModalBuyTicket);

// Ngăn nổi bọt
modalContainer.addEventListener('click', bubblePrevent);
function bubblePrevent(event) {
    event.stopPropagation();
}

// hàm hiển thị form mua vé
// nguyên lý hoạt động là thêm 1 class active để hiện
function showModalBuyTicket() {
    modal.classList.add('modal--active');
}

// hàm ẩn form mua vé
// nguyên lý hoạt động là ẩn 1 class active để trở về ban đầu
function closeModalBuyTicket() {
    modal.classList.remove('modal--active');
}

// JS Responsive

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng mở menu
mobileMenu.onclick = function () {
   var isClose = header.clientHeight === headerHeight;

   if(isClose) {
       header.style.height = 'auto';
   }
   else {
       header.style.height = null;
   }
}

// Tự động đóng menu
var MenuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < MenuItems.length; i++) {
    var MenuItem = MenuItems[i];
   
    // element tiếp theo liền kề
    
    MenuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }

    }
}


