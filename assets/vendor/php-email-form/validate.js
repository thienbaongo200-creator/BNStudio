/**
* PHP Email Form Validation - v3.11
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // ❌ Chặn gửi thật

      const loading = form.querySelector('.loading');
      const sentMessage = form.querySelector('.sent-message');
      const errorMessage = form.querySelector('.error-message');

      // Hiển thị hiệu ứng đang gửi
      if (loading) loading.classList.add('d-block');
      if (sentMessage) sentMessage.classList.remove('d-block');
      if (errorMessage) errorMessage.classList.remove('d-block');

      // Giả lập gửi thành công sau 2 giây
      setTimeout(function () {
        if (loading) loading.classList.remove('d-block');
        if (sentMessage) sentMessage.classList.add('d-block');
        form.reset();
      }, 2000);
    });
  });
})();