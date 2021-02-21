import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



export const FormModal = () => {

	return (


			<Modal
				className="modalform"
				isOpen={true}
				onAfterOpen=""
				onRequestClose=""
				style={customStyles}
				contentLabel="New title"
			>

				<h2>Intro a Title</h2>

				<form>
					<div className="modalform--title">
						<label>Title</label>
						<input type="text" placeholder="Intro a title" name="title" value="title" />
					</div>
					<div className="modalform--body">
						<label>Content</label>
						<textarea type="text" placeholder="Intro a content" name="body" value="body" />
					</div>
				</form>
			</Modal>


	)
}
