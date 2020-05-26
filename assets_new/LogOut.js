

    $(document).ready(function() {
        $('.logoutuser').click(function () {
        
            var account = localStorage.removeItem("address", null);
            location.href = "/bullrun2/user/signin";
        });
    });
