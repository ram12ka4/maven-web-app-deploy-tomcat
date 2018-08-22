<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DataTable Demo</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/jquery.dataTables.min.css">
<link rel="stylesheet" href="css/fixedColumns.dataTables.min.css">
<link rel="stylesheet" href="css/datatable.css">
</head>
<body>


	<div class="container">
		<form id="my-frm">
			<a href="#" class="btn btn-primary btn-lg show-modal">Modal</a> <a
				href="#" class="btn btn-primary btn-lg show-hello">Hello</a>
		</form>


		<div class="modal fade myModal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">Doctor's Previous
							Orders</h4>
					</div>
					<div class="modal-body"></div>
				</div>
			</div>
		</div>
	</div>


	<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/dataTables.fixedColumns.min.js"></script>
	<script type="text/javascript" src="js/datatable.js"></script>

</body>
</html>