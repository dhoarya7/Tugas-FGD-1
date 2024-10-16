
// Pastikan DOM telah dimuat sepenuhnya sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk memulai animasi pada elemen dengan ID tertentu
    function startTypingAnimation(elementId, text, speed, onComplete) {
      new Typed(elementId, {
        strings: [text],
        typeSpeed: speed,
        showCursor: false,
        onComplete: onComplete,
      });
    }
  
    // Memulai animasi untuk judul
    startTypingAnimation('#typed-hello', 'Hello, world!', 50, function () {
      // Setelah judul selesai, mulai animasi untuk deskripsi
      startTypingAnimation('#typed-description', 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.', 30, null);
    });
  });

// Pastikan DOM telah dimuat sepenuhnya sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk memulai animasi pada elemen dengan ID tertentu
  function startTypingAnimation(elementId, text, speed, onComplete) {
    new Typed(elementId, {
      strings: [text],
      typeSpeed: speed,
      showCursor: false,
      onComplete: onComplete,
    });
  }

  // Memulai animasi untuk judul
  startTypingAnimation('#typed-hello', 'Hello, world!', 50, function () {
    // Setelah judul selesai, mulai animasi untuk deskripsi
    startTypingAnimation('#typed-description', 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.', 30, null);
  });
});

