import React from “react”;
const Card = () => {
	return (
		<div className=“col-sm-3 col-lg-3 py-3">
			<div className=“card”>
				<img
					src={“https://picsum.photos/500/325?random=1”}
					className=“card-img-top”
					alt=“...”
				/>
				<div className=“card-body”>
					<h5 className=“card-title”>Card title</h5>
					<p className=“card-text”>
						Some quick example text to build on the card title and
						make up the bulk of the card’s content.
					</p>
					<a href=“#” className=“btn btn-primary”>
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};
export default Card;

