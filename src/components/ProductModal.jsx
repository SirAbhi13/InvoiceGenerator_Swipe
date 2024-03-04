import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Modal from "react-bootstrap/Modal";

const ProductModal = (props) => {
	return (
		<div>
			<Modal
				show={props.showModal}
				onHide={props.closeModal}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Product Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
						<div className="w-50">
							<h6 className="fw-bold text-secondary mb-2">
								Product ID: {props.product.id || ""}
							</h6>
							<h6 className="fw-bold text-secondary mb-2">
								Product Number: {props.product.productNumber || ""}
							</h6>
							<h6 className="fw-bold text-secondary mb-2">
								Product Name: {props.product.productName}
							</h6>
							<h6 className="fw-bold text-secondary mb-2">
								Category: {props.product.category || ""}
							</h6>
						</div>
						<div className="w-50 text-end">
							<h6 className="fw-bold text-secondary mb-2">
								{`Price: $ ${props.product.price}`}
							</h6>
						</div>
					</div>
				</Modal.Body>
			</Modal>
			<hr className="mt-4 mb-3" />
		</div>
	);
};

export default ProductModal;
