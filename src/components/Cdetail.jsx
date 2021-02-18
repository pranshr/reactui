import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Cdetail = () => {
	const { id } = useParams();

	const [body, setBody] = useState();
	

	useEffect(() => {
		async function getData(){
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			
			setBody(res.data.body);
		}
		getData();
	});


	return(
		<>
			
			<section class="company-section">
		<div class="container">
			<div class="row">
				
				<div class="col-md-12 p0">
				<div class="top">
				<ul class="company-ul">
					<li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/home.png`} /></a></li>
					<li><i class="fa fa-angle-double-right"></i></li>
					<li><a href="#" class="com">Companies</a></li>
					<li><i class="fa fa-angle-double-right"></i></li>
					<li><a href="#" class="hdfc">{body}</a></li>
				</ul>
				</div>
				</div>
				
			</div>
			<div class="row">
				
				<div class="col-md-9" >
					<div class="angle">
						<p class="pc"><img src={'../assets/images/sunphar.png'} class="pc-img" />title<span class="pull-right"><img src={`${process.env.PUBLIC_URL}/assets/images/c1.png`} /><img src={`${process.env.PUBLIC_URL}/assets/images/download.png`} /></span></p>
						<p class="mt-1">description</p>
						<div class="range">
						<div class="row">
							<div class="col-md-3">
								<p>Category Type</p>
								<p> c_category </p>

								<p>Company Name</p>
								<p>title</p>

								
							</div>
							<div class="col-md-3">
								

								<p>valuation</p>
								<p>valuation</p>

								<p>Funding</p>
								<p>funding</p>

								
							</div>
						<div class="col-md-3">
								
								<p>Company Code</p>
								<p>c_id</p>

								
								
							
						</div>
						<div class="col-md-3">
							
							
							
						</div>
						</div>

						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="code">
						<img src={`${process.env.PUBLIC_URL}/assets/images/c2.png`} class="center-block" />
						<p class="text-center mt-30">Directly reach out to place Buy/Sell orders</p>
						<p class="reach text-center"><a href="#">Trade</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>


			<section class="rt">
		<div class="container">
			<div class="row">
				
				
				<div class="col-md-9">
					<h3 class="want">Do you want to know more about Inventory?</h3>
					<p>Not to worry, Please login to our platform and you can access Inventory, Buy or Sell shares with negotiation and many more.</p>
					<p class="mt-30"><a href="#" class="btn2">Go To Login</a></p>
				</div>
								<div class="col-md-2"></div>
			</div>
		</div>
	</section>

		</>
	);
}

export default Cdetail;