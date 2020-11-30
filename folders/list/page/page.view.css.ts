namespace $.$$ {

	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_tsmb_folders_list_page, {

		flex: {
			basis: rem(20),
		},

		Items: {
			padding: $mol_gap.block,
		},

		Item: {
			justifyContent: 'space-between'
		},

		Items_empty: {
			padding: rem(1.5),
		},

	} )

}
