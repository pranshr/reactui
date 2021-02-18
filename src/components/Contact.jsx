import React from "react";



const Contact = () => {
	return(
		<>
				<section class="main-contact banner">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<h1>Want to know more!!</h1>
					<p>Worry not drop us a email or send a text message<br/>
				to our team will reach out to you shortly and<br/> help you understand the process</p>
				</div>
				<div class="col-md-5">
					<img src={`${process.env.PUBLIC_URL}/assets/images/contact.png`} class="img-responsive center-block" />
				</div>
			</div>
		</div>
	</section>


					<section class="contact-section1">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<div class="talk">
						<h3>Let's talk!</h3>
						<p className="con" ></p>
						<form>
							<div class="row">
								<div class="col-md-6">
							     <p>Name</p>
							     <div class="form-group">
							       <input type="text" class="form-control" name="" />
							     </div>
							    </div>
							    <div class="col-md-6">
							    	<p>Email</p>
							    	<div class="form-group">
							    		<input type="email" class="form-control" name="" />
							    	</div>
							    </div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p>Message</p>
									<div class="form-group">
										<textarea class="form-control"></textarea>
									</div>
								</div>
							</div>
							<button class="button1">Submit</button>
						</form>
					</div>
				</div>
				<div class="col-md-5">
					<div class="call">
					<img src={`${process.env.PUBLIC_URL}/assets/images/phone.png`} />
					<p>Call Us</p>
					<p>+91 254 168 254 168</p>
					<img src={`${process.env.PUBLIC_URL}/assets/images/email.png`} class="mt-50" />
					<p>Main Us</p>
					<p>hello@unlistedassets.com</p>
					</div>
				</div>
			</div>
		</div>
	</section>



		</>
	);
}

export default Contact;