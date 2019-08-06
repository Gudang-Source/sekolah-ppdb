(function(){
    $(document).ready(function () {
        $(window).on("scroll", function (e) {
            if ($(window).scrollTop() >= 50) {
                $("#header").addClass("fixed-top header-scrolled")
            } else {
                $("#header").removeClass("fixed-top header-scrolled")
            }
        })

        switch (window.location.pathname) {
            case '/ppdb/daftar.php':
                $('.main-nav ul li:nth-child(1)').addClass('active')
                // alert(window.location.href);
                break;
            case '/ppdb/prosedur.php':
                $('.main-nav ul li:nth-child(2)').addClass('active')
                // alert(window.location.href)
                break;
            case '/ppdb/persyaratan.php':
                $('.main-nav ul li:nth-child(3)').addClass('active')
                // alert(window.location.href)
                break;
            case '/ppdb/formulir.php':
                $('.main-nav ul li:nth-child(4)').addClass('active')
                // alert(window.location.href)
                break;
            case '/ppdb/pengumuman.php':
                $('.main-nav ul li:nth-child(5)').addClass('active')
                // alert(window.location.href)
                break;
            case '/ppdb/login.php':
                $('.main-nav ul li:nth-child(6)').addClass('active')
                // alert(window.location.href)
                break;
        }
    })
    // Tanggal Lahir
    var date = new Date();
    var yearNow = date.getFullYear();
    $('#tanggal').datepicker({
        dateFormat: "dd MM yy",
        changeMonth: true,
        changeYear: true,
        minDate: new Date(1990, 1 - 1, 1),
        maxDate: "+1D",
        yearRange: '1990:'+yearNow
    });


    // DataTables Searching and Pagination
    $('.table').DataTable();
})();