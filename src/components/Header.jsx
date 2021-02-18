import React from "react";
import { Link, withRouter } from "react-router-dom";


const Header = () => {
	return(
		<>

			<section class="topheader">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="text-center">Buy/ Sell umlisted shares with us. Join ours planform with easy steps <a href="#" class="ml-50 btn-white">Join our platform</a><a href="#" class="close1"><i class="fa fa-times"></i></a></p>
						</div>
					</div>
				</div>
			</section>
				<header class="header">
		<nav class="navbar">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
     <a href="http://ua.pixelworkhost.com/"><img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} class="logo" /></a>
    </div></div>
					<div class="col-md-9">
						  <div class="collapse navbar-collapse" id="myNavbar">
						<ul class=" navbar-right">
							<li class="active"><Link to="/">Home</Link></li>

							
							<li><Link to="">Platform</Link></li>
							<li><Link to="/Companies">Companies</Link></li>
							<li><Link to="/Services">Services</Link></li>
							<li><Link to="/Contact">Contact Us</Link></li>

							
							<li><a href="#loginModal" data-toggle="modal" class="login">Login/Sign Up</a></li>
							<li><a href="javascript:void(0)" class="closebtn" ><i class="fa fa-list"></i></a></li>
						</ul>
					</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</nav>
	</header>



		</>
	);
}

export default Header;