namespace $.$$ {

	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_tsmb_folders_page, {

		flex: {
			basis: rem(30),
		},

		Body: {
			padding: $mol_gap.block,
		},

		Fields: {
		},

		Field_text: {
			padding: $mol_gap.block,
		},
		
		Field_flag: {
			display: 'flex',
		},
		
		Foot: {

			padding: $mol_gap.block,
			
			$mol_button: {
				flex: {
					grow: 1,
				},
			},
			
		},

	} )

}
