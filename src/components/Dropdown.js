import React from 'react';
import { InfoDropdown } from '../components/InfoDropdown'
import {FormModal} from './FormModal'
import { data } from '../components/data'


export const Dropdown = () => {


	return (


		<div className="dropdown">

			{data.map(dat => <InfoDropdown key={dat.id} {...dat} />)}

		</div>
	)

}
