import React, { useState } from 'react';
import { DropdownArrow } from './DropdownArrow'

export const InfoDropdown = ( text ) => {

	const [hidden, setHidden] = useState(false)

	return (



		<div className="dropdown--element" onClick={() => setHidden( !hidden)}>
			<div className="dropdown--content">
				<div className="dropdown--title"> {text.title}

				<span className="dropdown--element_arrow">
					{ DropdownArrow(hidden) }
				</span>
				</div>

				{ hidden ?
					<div className="dropdown--body">
						{text.body}
					</div>
					: null
				}

			</div>
		</div>


	)

}
