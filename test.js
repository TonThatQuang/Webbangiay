// Lấy thẻ hiển thị đồng hồ đếm ngược
const countdownElement = document.getElementById('countdown');

// Hàm để cập nhật và hiển thị thời gian đồng hồ đếm ngược
function updateCountdown() {
    // Lấy thời gian hiện tại
    const currentTime = Date.now();
    
    // Lấy thời gian còn lại từ localStorage, nếu không có thì mặc định là 10 ngày (tính bằng mili giây)
    let remainingTime = localStorage.getItem('countdownTime');
    if (!remainingTime) {
        remainingTime = 10 * 24 * 60 * 60 * 1000; // 10 ngày
    } else {
        remainingTime = parseInt(remainingTime);
    }
    
    // Tính thời gian còn lại
    remainingTime -= (currentTime - parseInt(localStorage.getItem('lastUpdateTime') || currentTime));
    
    // Kiểm tra xem thời gian còn lại có lớn hơn 0 không
    if (remainingTime > 0) {
        // Tính số ngày, giờ, phút và giây
        const days = Math.floor(remainingTime / (3 * 60 * 60 * 1000));
        const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
        
        // Hiển thị thời gian đồng hồ đếm ngược
        countdownElement.textContent = `Thời gian còn lại: ${days} Ngày ${hours} Giờ ${minutes} Phút ${seconds} Giây`;

        // Lưu thời gian đếm ngược và thời gian cập nhật gần nhất vào localStorage
        localStorage.setItem('countdownTime', remainingTime);
        localStorage.setItem('lastUpdateTime', currentTime);
    } else {
        // Nếu thời gian còn lại nhỏ hơn hoặc bằng 0, hiển thị thông báo
        countdownElement.textContent = "Countdown finished!";
        
        // Xóa thời gian đếm ngược và thời gian cập nhật gần nhất từ localStorage
        localStorage.removeItem('countdownTime');
        localStorage.removeItem('lastUpdateTime');
        
        // Dừng bộ đếm ngược bằng cách xóa bộ đếm interval
        clearInterval(countdownInterval);
    }
}

// Gọi hàm cập nhật thời gian đồng hồ đếm ngược mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);

// Nếu trang được làm mới, thực hiện cập nhật lại thời gian đồng hồ đếm ngược
window.onload = function() {
    updateCountdown();
}



/* phần cuộn trang */


// Lắng nghe sự kiện scroll
window.addEventListener('scroll', function() {
    // Nếu người dùng đã cuộn xuống một khoảng cách, hiển thị nút
    if (window.scrollY > 700) {
        document.getElementById('scrollToTopBtn').style.display = 'block';
    } else {
        document.getElementById('scrollToTopBtn').style.display = 'none';
    }
  });
  
  // Lắng nghe sự kiện click trên nút
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    // Gọi hàm cuộn lên đầu trang mềm mại
    scrollToTop(500); // Thời gian (ms) để cuộn từ dưới lên trên
  });
  
  // Hàm đệ qui để cuộn lên đầu trang mềm mại
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function(){
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    },15);
  }

/*phần mess */
  window.addEventListener('scroll', function() {
    var messengerButton = document.getElementById('messengerButton');
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var scrollPosition = window.scrollY;

    // Hiển thị nút Messenger khi lướt xuống
    if (scrollPosition > 100) { // Thay 100 bằng khoảng cách bạn muốn
        messengerButton.style.bottom = '20px'; // Hiện nút từ dưới lên trên màn hình
        messengerButton.style.right = '20px'; // Hiện nút từ phải qua trái màn hình
    } else {
        messengerButton.style.bottom = '-50px'; // Ẩn nút khi lướt lên trên đầu trang
        messengerButton.style.right = '-50px'; // Ẩn nút khi lướt lên trên đầu trang
    }

    // Hiển thị nút cuộn lên khi lướt xuống
    if (scrollPosition > 700) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});
function openMessenger() {
    window.open('https://m.me/thatquang.ton.77', '_blank');
  }




  function togglePassword() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '<i class="fas fa-eye"></i>'; // Thay đổi biểu tượng con mắt thành mở
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Thay đổi biểu tượng con mắt thành đóng
    }
}
        function validateForm() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var message = document.getElementById('message');

            // Kiểm tra tên người dùng và mật khẩu
            if (username === 'admin' && password === 'admin') {
                message.innerText = 'Đăng nhập thành công';
                message.style.color = 'green';
                
                // Đợi 2 giây trước khi chuyển hướng đến trang khác
                setTimeout(function() {
                    window.location.href = 'trangsp1.html';
                }, 1000); // 2000 milliseconds = 2 giây
                
                return false; // Ngăn form được gửi đi
            } else {
                message.innerText = 'Sai tên người dùng hoặc mật khẩu';
                message.style.color = 'red';
                return false; // Ngăn form được gửi đi
            }
        }

        // Hàm togglePassword() và phần CSS đã được bảo toàn


        /*phần mắt mật khẩu trang login */

        function togglePassword() {
            var passwordInput = document.getElementById('password');
            var eyeIcon = document.getElementById('eye-icon');
        
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        }

/*phần chuyển trang và thông báo login */


        var passwordVisible = false;

function togglePassword() {
    var passwordField = document.getElementById('password');
    passwordField.type = passwordVisible ? "password" : "text";
    var eyeIcon = document.getElementById('eye-icon');
    eyeIcon.classList.toggle("fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
    passwordVisible = !passwordVisible;
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('login-message');
    var overlay = document.getElementById('overlay');

    // Thực hiện kiểm tra tên đăng nhập và mật khẩu
    if (username === "quang123" && password === "quang123") {
        loginMessage.innerText = "Đăng nhập thành công!";
        loginMessage.classList.remove("error-message");
        loginMessage.classList.add("success-message");

        overlay.style.display = "flex"; // Hiển thị overlay trước khi load

        // Đợi 2 giây trước khi chuyển hướng đến trang khác
        setTimeout(function() {
            window.location.href = "webbangiay.html";
        }, 1200); // Thời gian đợi là 1000ms (1 giây)
    } else {
        loginMessage.innerText = "Sai tên đăng nhập hoặc mật khẩu!";
        loginMessage.classList.remove("success-message");
        loginMessage.classList.add("error-message");

        overlay.style.display = "none"; // Ẩn overlay nếu đăng nhập không thành công
    }
}


/*size giày */

const checkboxes = document.querySelectorAll('.size-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(cb => {
            if (cb !== this) {
                cb.checked = false;
            }
        });
    });
});
function togglePopup() {
    var popupContent = document.getElementById("popupContent");
    var popupOverlay = document.getElementById("popupOverlay");

    if (popupContent.style.display === "none") {
        popupContent.style.display = "block";
        popupOverlay.style.display = "block";
    } else {
        popupContent.style.display = "none";
        popupOverlay.style.display = "none";
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.product-detail-right-addcart button');
    const cartItemsContainer = document.querySelector(".cart tbody");
    const cartTotalPrice = document.querySelector(".price-total .sale-price");
    const cart = document.querySelector(".cart");
    const cartIcon = document.querySelector(".fa-cart-shopping");
    const closeCartIcon = document.querySelector(".cart .fas.fa-times");
    const cartItemCount = document.querySelector(".cart-item-count"); // Thêm đối tượng mới cho số sản phẩm

    // Ẩn giỏ hàng khi trang được tải
    cart.style.display = "none";

    // Kiểm tra xem có sản phẩm trong localStorage không
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItemsContainer.innerHTML = cartItems;
        updateTotalPrice();
        updateCartItemCount(); // Cập nhật số lượng sản phẩm khi trang được tải
    }

    // Sự kiện click vào icon giỏ hàng
    cartIcon.addEventListener("click", function () {
        toggleCartDisplay();
    });

    // Sự kiện click vào biểu tượng đóng giỏ hàng
    closeCartIcon.addEventListener("click", function () {
        toggleCartDisplay();
    });

    // Sự kiện khi thay đổi số lượng
    cartItemsContainer.addEventListener("input", function (event) {
        const input = event.target;
        if (input.type === "number" && input.value > 0) {
            updateCartItemTotalPrice(input);
            updateTotalPrice();
            updateCartItemCount(); // Cập nhật số lượng sản phẩm khi thay đổi số lượng
            // Cập nhật lại dữ liệu trong localStorage
            localStorage.setItem("cartItems", cartItemsContainer.innerHTML);
        }
    });

    // Sự kiện click vào nút "Thêm vào giỏ hàng"
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            // Kiểm tra xem sự kiện click được kích hoạt từ đâu
            if (event.target.classList.contains('main-btn')) {
                // Lấy thông tin sản phẩm
                const productDetail = button.closest('.product-detail');
                const productName = productDetail.querySelector('h4').innerText;
                const productPrice = parseFloat(productDetail.querySelector('.gia2').innerText.replace(/\D+/g, ""));
                const productImage = productDetail.querySelector('.sp').src;

                // Tạo một hàng mới trong giỏ hàng
                const cartItemRow = document.createElement("tr");
                cartItemRow.innerHTML = `
                    <td>
                        <img src="${productImage}" alt="${productName}" style="width: 70px;">
                        ${productName}
                    </td>
                    <td>${productPrice}</td>
                    <td><input type="number" value="1" min="1"></td>
                    <td><button class="remove-item">Xóa</button></td>
                `;

                // Thêm hàng vào trong giỏ hàng
                cartItemsContainer.appendChild(cartItemRow);

                // Cập nhật tổng tiền
                updateTotalPrice();
                updateCartItemCount(); // Cập nhật số lượng sản phẩm khi thêm sản phẩm mới
                // Lưu giỏ hàng vào localStorage
                localStorage.setItem("cartItems", cartItemsContainer.innerHTML);

                // Hiển thị giỏ hàng khi thêm sản phẩm
                if (cart.style.display !== "block") {
                    toggleCartDisplay();
                }
            }
        });
    });

    // Sự kiện click vào nút "Xóa"
    cartItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains('remove-item')) {
            const rowToRemove = event.target.closest("tr");
            rowToRemove.remove();
            updateTotalPrice();
            updateCartItemCount(); // Cập nhật số lượng sản phẩm khi xóa sản phẩm
            // Cập nhật lại dữ liệu trong localStorage
            localStorage.setItem("cartItems", cartItemsContainer.innerHTML);
        }
    });

    // Hàm cập nhật giá tiền của mỗi sản phẩm trong giỏ hàng
    function updateCartItemTotalPrice(input) {
        const row = input.closest("tr");
        const priceText = row.querySelector("td:nth-child(2)").innerText;
        const price = parseFloat(priceText.replace(/\D+/g, ""));
        const quantity = parseInt(input.value);
        const total = price * quantity;
        row.querySelector("td:nth-child(2)").innerText = formatCurrency(price);
    }

    // Hàm cập nhật tổng tiền
    function updateTotalPrice() {
        let totalPrice = 0;
        cartItemsContainer.querySelectorAll("tr").forEach(function (row) {
            const priceText = row            .querySelector("td:nth-child(2)").innerText;
            const price = parseFloat(priceText.replace(/\D+/g, ""));
            const quantity = parseInt(row.querySelector("td:nth-child(3) input").value);
            totalPrice += price * quantity;
        });
        cartTotalPrice.innerText = formatCurrency(totalPrice);
    }

    // Hàm định dạng số tiền thành chuỗi có dấu phân cách hàng nghìn
    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }

    // Hàm hiển thị/ẩn giỏ hàng
    function toggleCartDisplay() {
        cart.style.display = cart.style.display === "block" ? "none" : "block";
    }

    // Hàm cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
    function updateCartItemCount() {
        const itemCount = cartItemsContainer.querySelectorAll("tr").length;
        cartItemCount.textContent = itemCount; // Cập nhật số lượng sản phẩm
    }
});




/*---------------------------------------------------------------------------------------------- */



 // Lấy tất cả các nút "Xem chi tiết"
 var showMapBtns = document.querySelectorAll('.showMapBtn');

 // Lặp qua từng nút và gán sự kiện click
 showMapBtns.forEach(function (btn) {
     btn.addEventListener("click", function () {
         // Tìm đến phần tử chứa bản đồ tương ứng với nút được nhấp
         var mapContainer = this.nextElementSibling;
         // Hiển thị phần chứa bản đồ
         mapContainer.style.display = "block";
     });
 });

 // Lấy tất cả các nút "Đóng"
 var closeMapBtns = document.querySelectorAll('.closeMapBtn');

 // Lặp qua từng nút và gán sự kiện click
 closeMapBtns.forEach(function (btn) {
     btn.addEventListener("click", function () {
         // Ẩn phần chứa bản đồ khi nút "Đóng" được nhấp
         this.parentNode.style.display = "none";
     });
 });









 





 function copyText() {
    var textToCopy = "GZ2440/100K";
    navigator.clipboard.writeText(textToCopy).then(function () {
        var copyButton = document.getElementById('copyButton');
        copyButton.innerText = "Đã sao chép";
        copyButton.classList.add('copied');
        setTimeout(function () {
            copyButton.innerText = "Sao chép";
            copyButton.classList.remove('copied');
        }, 2000); // Thời gian chờ 2 giây (2000 milliseconds)
    }, function (err) {
        console.error('Lỗi khi sao chép: ', err);
    });
}

function copyTextPopup() {
    var textToCopy = "GZ2440/100K";
    navigator.clipboard.writeText(textToCopy).then(function () {
        var copyButton = document.getElementById('copyButtonPopup');
        copyButton.innerText = "Đã sao chép";
        copyButton.disabled
            = true;
        setTimeout(function () {
            copyButton.innerText = "Sao chép";
            copyButton.disabled = false;
        }, 2000); // Thời gian chờ 2 giây (2000 milliseconds)
    }, function (err) {
        console.error('Lỗi khi sao chép: ', err);
    });
}

function togglePopup(event) {
    var popupContent = document.getElementById("popupContent");
    var popupOverlay = document.getElementById("popupOverlay");
    popupContent.style.display = (popupContent.style.display === "block") ? "none" : "block";
    popupOverlay.style.display = (popupOverlay.style.display === "block") ? "none" : "block";
}





/*______________________________________________ */
// JavaScript để hiển thị hộp thoại cảnh báo khi nhấp vào nút
document.getElementById("submitBtn").addEventListener("click", function(event) {
    // Ngăn chặn hành vi mặc định của nút button (gửi dữ liệu biểu mẫu và làm tải lại trang)
    event.preventDefault();

    // Hiển thị hộp thoại cảnh báo
    var alertBox = document.getElementById("alertBox");
    alertBox.style.display = "block";
    alertBox.classList.add("show");
    
    // Tự động ẩn hộp thoại sau 3 giây
    setTimeout(function() {
        alertBox.style.display = "none";
        alertBox.classList.remove("show");
    }, 3000);
});


document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    var fullname = document.getElementById("fullnameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;
    var address = document.getElementById("addressInput").value;
    var ward = document.getElementById("wardInput").value;

    if (fullname === "" || email === "" || phone === "" || address === "" || ward === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        // Ẩn thông báo hoàn tất đơn hàng nếu thông tin nhập liệu không đầy đủ
        document.getElementById("alertBox").style.display = "none";
        return; // Dừng thực thi hàm nếu có trường nhập liệu trống
    }

    // Hiển thị hộp thoại cảnh báo
    document.getElementById("alertBox").style.display = "block";
    
    // Tự động ẩn hộp thoại sau 3 giây
    setTimeout(function() {
        document.getElementById("alertBox").style.display = "none";
    }, 3000);

    // Thực hiện các hành động khác sau khi đã xác nhận đầy đủ thông tin
});



