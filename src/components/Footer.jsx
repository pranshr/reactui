import React from "react";
import { Link, withRouter } from "react-router-dom";


const Footer = () => {


	return(
		<>
				<footer class="footer">
	 <div class="footer-back">
		<div class="container">
	
					<div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} class="footer-logo" />
							<p class="mt-30">&copy; 2020 -2021 All Right Reserved</p>
							<p class="mb-30">All Rights reserved.</p>
							<ul class="sociallinks">
								<li><a href="https://twitter.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} /></a></li>
								<li><a href="https://facebook.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/images/fb.png`} /></a></li>
								<li><a href="https://instagram.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/images/insta.png`} /></a></li>
								<li><a href="https://youtube.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/images/yt.png`} /></a></li>
							</ul>
						</div>
					<div class="col-md-2 col-sm-2">
				    <h4 class="quick">Quick Links</h4>
					<ul class="ul1">
						<li><Link to="/">Home</Link></li>
						<li><a href="#">Platform</a></li>
						<li><Link to="/Companies">Companies</Link></li>
						<li><a href="#">Blog</a></li>
						<li><Link to="/Services">Services</Link></li>
						<li><Link to="/Contact">Contact Us</Link></li>
					</ul>
				    </div>
					<div class="col-md-3 col-sm-3">
						<h1></h1>
						<ul class="ul2">
							<li><Link to="/About">About</Link></li>
							<li><a href="#">Types of Unlisted Companies</a></li>
							<li><a href="#">Solutions</a></li>
							<li><Link to="/Why">Why Us</Link></li>

							<li><Link to="/Faq">Faq</Link></li>

						</ul>
					</div>
					<div class="col-md-2 col-sm-2">
						<h4 class="legal">Legal</h4>
						<ul class="ul3">
							
							<li><Link to="/Disclaimers">Disclaimers</Link></li>
							
							<li><a href="#">Terms of Use</a></li>
							<li><Link to="/Terms">Privacy Policy</Link></li>

							<li><Link to="/Scompanies">Solution For Companies</Link></li>
							<li><Link to="/Institutions">Institutions</Link></li>
							<li><Link to="/Investors">Investors</Link></li>
							<li><Link to="/Shareholders">Shareholders</Link></li>
							
							
						</ul>
					</div>
					<div class="col-md-2 col-sm-2">
						<h4>Subscribe To Our Newsletter</h4>
						<div class="form-group">
						<input type="text" name="" class="text form-control" placeholder="Email" />
						</div>
						<div class="form-group">
						<button type="button" class="btn btn-white">Subscribe</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	
	</footer>


	<div id="mySidenavR" class="sidenavR skew">
		<div class="skewnav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNavR()">Close <i class="fa fa-times"></i></a>
    <h4><a href="#" class="text-white">About UnlistedAssets.com</a></h4>
    <p class="text-white">Solutions</p>
   
    <ul class="sidenav1">
    	<li><a href="#">For Companies</a></li>
    	<li><a href="#">For Institutions</a></li>
    	<li><a href="#">For Investors</a></li>
    	<li><a href="#">For Shareholders</a></li>
    </ul>
    <p><a href="#">Why Us</a></p>
    <p><a href="#">FAQ</a></p>
</div>
</div>
	<div id="loginModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times"></i></button>
       
      </div>
      <div class="modal-body">
       <div class="row">
       	<div class="col-md-6">
       		<div class="modalleft">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modalimg.png`} class="center-block" alt="modalimg" />
       			<h4 class="text-center text-bold">Your data 100% secure <br class="hidden-xs"/> with us</h4>
       			<p class="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
       		</div>
       	</div>
       	<div class="col-md-6">
       		<div class="modalright">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modallogo.png`} alt="modallogo" />
       			<h3 class="text-bold">Welcome Back</h3>
       			<div class="form-group">
       				<label>User ID</label>
       				<input type="text" class="form-control" />
       			</div>
       			<div class="form-group">
       				<label>Password</label>
       				<input type="password" class="form-control" />
       			</div>
       			<div class="form-group">
       				<button type="button" class="btn btn-block loginbtn">Login</button>
       			</div>

       			<div class="forgotdiv text-center">
       				<p><a href="#">Forgot User ID?</a> <a href="#">Forgot Password?</a></p>
       			</div>
       			<div class="signup">
       				<p class="text-center">Don't have an account yet? <a href="#">Sign Up</a></p>
       			</div>
       		</div>
       	</div>

       </div>
      </div>
      
    </div>

  </div>
</div>




		</>


	);


}



export default Footer;