$(function () {
	$('.menu-trigger').click(function () {
		$(this).toggleClass('active');
		$("#sp_menu").fadeToggle(300);
		$("#sp_menu_bg").fadeToggle(300);
		$("#sp_menu_bg02").fadeToggle(300);
	});
	// $('.btn_sub').on('click', function () {
	// 	$(this).toggleClass('active');
	// });
	
});
