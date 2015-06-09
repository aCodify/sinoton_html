<?php
$page_name = 'contact';
include 'inc/meta.php';
include 'inc/header.php';
?>

<main id="page-wrapper" class="sub-page contact">
	<div class="container">

		<div class="main-content">

			<header>
				<h1>Contact us</h1>
			</header>

			<div class="col-left">
				<form action="">
					<div class="form-group"><label>Name</label><span class="orange"><span class="orange">: &nbsp;</span></span><input type="text"></div>
					<div class="form-group"><label>Company Name</label><span class="orange">: &nbsp;</span><input type="text"></div>
					<div class="form-group"><label>Subject</label><span class="orange">: &nbsp;</span><input type="text"></div>
					<div class="form-group"><label><i class="ico-phone"></i></label><span class="orange">: &nbsp;</span><input type="text"></div>
					<div class="form-group"><label><i class="ico-email"></i></label><span class="orange">: &nbsp;</span><input type="text"></div>
					<div class="form-group"><label>Message</label><span class="orange">: &nbsp;</span><textarea></textarea></div>
					<div class="form-group"><label></label>&nbsp;&nbsp;&nbsp;<input type="text" style="width:169px;"><img alt="" src="img/captcha.jpg" class="captcha"></div>
					<div class="button-group">
						<label></label>&nbsp;&nbsp;
						<button type="submit">Send</button>
						<button type="reset">Clear</button>
					</div>
				</form>
			</div><!-- .col-left -->

			<div class="col-right">
				<img alt="" src="img/logo-contact-us.png" class="bm15">
				<div class="desc">
					<div class="row">
						<h4>SINOTON Investments (Australia) Pty Ltd</h4>
						<span class="orange">Address:</span> T2 Childers Square 14 Childer st, Canberra ACT 2612<br>
						Australia
					</div>

					<div class="row">
						<h4>SINOTON International (Thailand) Co., Ltd</h4>
						<span class="orange">Address:</span> 545 Chokchai  4 street, Ladprao, Bangkok Thailand
					</div>

					<div class="row">
						<span class="orange">Phone (Australia) :</span> +61 439598889 &nbsp;&nbsp;| &nbsp;+61439440990<br>
						<span class="orange">Phone (Thailand) :</span> +66 949794968 &nbsp;&nbsp;&nbsp;| &nbsp;+66 83999 9793<br>
						<span class="orange">Phone (China) :</span> +86 187 8906 7000 &nbsp;| &nbsp;+86 187 8919 2777<br>
						<span class="orange">Email :</span> <a href="mailto:info@sinoton.com.au">info@sinoton.com.au</a>
					</div>
				</div>
			</div><!-- .col-right -->

		</div><!-- .main-content -->

	</div><!-- .container -->
</main><!-- #page-wrapper -->

<?php include 'inc/footer.php'; ?>