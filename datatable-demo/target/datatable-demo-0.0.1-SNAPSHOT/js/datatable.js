$(function() {

	$(document)
			.on(
					'click',
					'.show-modal',
					function() {
						$('.modal-body')
								.load(
										'login.do',
										{
											ACTION : 'FETCH_VALUE'
										},
										function(response, status, xhr) {
											if (status == 'error') {
												var msg = "Sorry but there was an error";
												alert(response);
												alert(msg + xhr.status + " "
														+ xhr.statusText);
											}

											var table = $('#example')
													.DataTable({
														scrollY : "50vh",
														scrollX : true,
														scrollCollapse : true,
														paging : false,
														fixedColumns : true
													});

											// $('.myModal
											// .modal-title').html("Previous
											// Investigation Record");

											$('.myModal')
													.on(
															'shown.bs.modal',
															function() {
																table
																		.fixedColumns()
																		.relayout();
																// table.fixedColumns().update();
																var modal = $(this);
																modal
																		.find(
																				'.modal-title')
																		.text(
																				'Previous Investigation Record');

															}).modal({
														show : true
													});

										});

					});

	$(document).on('click', '.show-hello', function() {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", "ACTION");
		input.setAttribute("value", "SHOW_HELLO");
		document.getElementById("my-frm").appendChild(input);
		document.getElementById("my-frm").method = "get";
		document.getElementById("my-frm").action = "login.do";
		document.getElementById("my-frm").submit();
	});

	$(document).on('click', '.show-home', function() {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", "ACTION");
		input.setAttribute("value", "SHOW_MODAL");
		document.getElementById("hello-frm").appendChild(input);
		document.getElementById("hello-frm").method = "get";
		document.getElementById("hello-frm").action = "hello.do";
		document.getElementById("hello-frm").submit();
	});

});