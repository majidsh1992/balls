

// $(document).ready(function() {
//     // ایجاد توپ بر روی هر خط
//     $('.line').append('<div class="ball"></div>');

//     // حرکت توپ‌ها
//     function moveBalls() {
//         $('.ball').each(function(index) {
//             const $this = $(this);
//             $this.animate({
//                 top: '+=100px' // تغییر مقدار '+=100px' برای تنظیم ارتفاع حرکت توپ‌ها
//             }, 1000, function() {
//                 $this.animate({
//                     top: '-=10px' // تغییر مقدار '-=100px' برای تنظیم ارتفاع حرکت توپ‌ها
//                 }, 1000, function() {
//                     moveBalls(); // فراخوانی تابع به صورت بازگشتی برای ادامه حرکت توپ‌ها
//                 });
//             });
//         });
//     }

//     moveBalls(); // شروع حرکت توپ‌ها
// });



// $(document).ready(function() {
//     $('.line').append('<div class="ball"></div>');

//     function moveBalls() {
//         $('.ball').each(function(index) {
//             const $this = $(this);
//             $this.animate({
//                 top: '+=100px'
//             }, 1000, function() {
//                 $this.animate({
//                     top: '-=100px'
//                 }, 1000, function() {
//                     moveBalls();
//                 });
//             });
//         });
//     }

//     moveBalls();

// });
// پخش صدا هنگام بارگذاری صفحه
const audio = document.getElementById('myAudio');
; // تکرار خودکار صدا


if (audio.loop == true) {
    audio.play();
}