<div id="wrapper">

	<header id="main-header">
		<div class="container">

			<!-- /////////////////////////////////////////////////// -->

			<div class="row-1">
				<div class="top-border"></div>
			</div>

			<div class="row-2">
				<div class="logo">
					<a href="index.php"><img alt="" title="" src="img/logo.png"></a>
				</div>
			</div><!-- .row-2 -->

			<div class="row-3">

				<nav class="main-nav">
					<ul>
						<li class="<?php if ( $page_name == 'home') { echo 'active'; } ?>"><a href="index.php"><span class="bullet">•</span>Home</a></li>
						<li class="<?php if ( $page_name == 'about') { echo 'active'; } ?>"><a href="about.php"><span class="bullet">•</span>About Us</a></li>
						<li class="sub-show <?php if ( $page_name == 'tapioca_chips') { echo 'active'; } ?>">
							<a href="tapioca-chips.php"><span class="bullet">•</span>Tapioca Chips</a>
							<ul class="sub-menu hidden">
								<li><a href="tapioca-chips.php">Tapioca Chips Specifications</a></li>
								<li><a href="tapioca-chips-2.php">The use of Tapioca Chip</a></li>
								<li><a href="tapioca-chips-3.php">Production Facilities Images</a></li>
								<li><a href="tapioca-chips-4.php">Terms of Purchase Information</a></li>
							</ul>
						</li>
						<li class="<?php if ( $page_name == 'artificial_turf') { echo 'active'; } ?>"><a href="artificial-turf.php"><span class="bullet">•</span>Artificial Turf</a></li>
						<li class="<?php if ( $page_name == 'thai_premium_rice') { echo 'active'; } ?>"><a href="thai-premium-rice.php"><span class="bullet">•</span>Thai Premium Rice</a></li>
						<li class="<?php if ( $page_name == 'contact') { echo 'active'; } ?>"><a href="contact.php"><span class="bullet">•</span>Contact Us</a></li>
					</ul>
					<div class="language">
						<ul>
							<li><a href="index-th.php"><i class="ico-th"></i></a></li>
							<li><a href="index.php"><i class="ico-en"></i></a></li>
							<li><a href="index-ch.php"><i class="ico-ch"></i></a></li>
						</ul>
					</div>
				</nav>

			</div><!-- .row-3 -->

			<!-- /////////////////////////////////////////////////// -->

		</div><!-- .container -->
    </header><!-- #main-header -->